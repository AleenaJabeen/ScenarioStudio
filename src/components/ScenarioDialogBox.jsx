import React, { useMemo, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BsExclamationCircleFill } from "react-icons/bs";
import ResultsScenarioDialogBox from "./ResultsScenarioDialogBox";

// Constants
const ASSUMED_RATE = 0.059;
const ASSESSMENT_BUFFER = 0.03;
const TERM_YEARS = 30;
const HEM_SINGLE = 2500;
const HEM_COUPLE = 3500;
const DENSITY_POSTCODES = ["2000", "2010", "2050", "3000", "4000", "6000"];

function ScenariosDialogBox({ onClose, data,openNextDialog }) {
// another dialog box




  // Run all calculations using useMemo
  const results = useMemo(() => {
   const propertyValue = Number(data.propertyValue.replace(/\D/g, "")) || 0;
  const deposit = Number(data.deposit.replace(/\D/g, "")) || 0;
  const monthlyIncome = Number(data.monthlyIncome.replace(/\D/g, "")) || 0;
  const partnerIncome = Number(data.partnerIncome.replace(/\D/g, "")) || 0;
  const monthlyDebts = Number(data.monthlyDebts.replace(/\D/g, "")) || 0;

    // 1. Loan amount
    const loanAmount = propertyValue - deposit;

    // 2. LVR
    const lvr = propertyValue > 0 ? loanAmount / propertyValue : 0;

    // 3. Repayment (standard P&I formula)
    const r = ASSUMED_RATE / 12;
    const n = TERM_YEARS * 12;
    const repayment =
      loanAmount > 0
        ? (loanAmount * r) / (1 - Math.pow(1 + r, -n))
        : 0;
   
    // 4. Assessment rate
    const assessmentRate = ASSUMED_RATE + ASSESSMENT_BUFFER;

    // 5. Adjusted income (haircut 30%)
    const grossIncome = monthlyIncome + partnerIncome;
    const adjustedIncome = grossIncome * 0.7;

    // 6. Benchmark expenses (based on single or couple)
    const benchmarkExpenses =
      partnerIncome > 0 ? HEM_COUPLE : HEM_SINGLE;

    // 7. UMI
    const umi = adjustedIncome - monthlyDebts - benchmarkExpenses;

    // 8. Borrowing power (reverse amortization using UMI as repayment capacity)
    const rAssessment = assessmentRate / 12;
    const borrowingPower =
      umi > 0
        ? umi * (1 - Math.pow(1 + rAssessment, -n)) / rAssessment
        : 0;

    // 9. Serviceability band
    let serviceability = "Low";
    if (umi >= adjustedIncome * 0.2) {
      serviceability = "High";
    } else if (umi >= adjustedIncome * 0.05) {
      serviceability = "Moderate";
    }

    // 10. Confidence Score (scale 0–10)
    let score = 10;

    // Factor 1: Income vs liabilities
    if (umi < 0) score -= 4;
    else if (umi < adjustedIncome * 0.05) score -= 2;

    // Factor 2: LVR
    if (lvr > 0.9) score -= 3;
    else if (lvr > 0.8) score -= 1;

    // Factor 3: Postcode risk
    if (DENSITY_POSTCODES.includes(data.postCode)) score -= 2;

    // Factor 4: Employment type
    if (data.employmentType !== "Employed") score -= 1;

    if (score < 0) score = 0;
    if (score > 10) score = 10;

    return {
      loanAmount,
      lvr,
      repayment,
      umi,
      borrowingPower,
      serviceability,
      confidenceScore: score,
    };
  }, [data]);
       const formatBorrowingPower = (value) => {
  // Round to nearest 1000
  const rounded = Math.round(value / 1000) * 1000;
  const lower = Math.max(0, rounded - 50000);
  const upper = rounded + 50000;
  return `${Math.round(lower / 1000)}K – ${Math.round(upper / 1000)}K`;
};

  const confidenceColor =
    results.confidenceScore >= 8.5
      ? "text-[#22C55E] border-[#22C55E]"
      : results.confidenceScore >= 6.5
      ? "text-amber-500 border-amber-500"
      : "text-red-500 border-red-500";
    const serviceColor =
    results.serviceability === "High"
      ? "text-[#22C55E]"
      : results.serviceability === "Moderate"
      ? "text-amber-500"
      : "text-red-500";

      const handleOpenNext = (type) => {
  localStorage.setItem("scenarioResults", JSON.stringify(results));
  console.log(localStorage.getItem("scenarioResults", JSON.stringify(results)))
    openNextDialog(type); // call parent to handle next dialog
  };

  return (
    <>
    <div className="font-[Inter] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="bg-[#FFF9EC] max-w-[1055px] lg:w-[80vw] w-[95vw] h-[80vh] rounded-[20px] md:p-[30px] p-[10px] shadow-xl relative flex flex-col overflow-y-scroll no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer md:text-3xl text-xl text-black"
        >
          <CgClose />
        </button>

        <div className="flex md:flex-row flex-col items-stretch justify-evenly gap-4 mt-8">
          {/* Confidence Score */}
          <div className="lg:w-1/2 w-full border border-[#C8ACAC] rounded-[10px] bg-white px-3 py-4">
            <h3 className="font-bold text-[#FFAD01] lg:text-[30px] text-xl p-2">
              Confidence Score
            </h3>
            <div className="flex items-center gap-2">
              <div
                className={`flex flex-col items-center w-[115px] h-[115px] rounded-full p-4 border-6 ${confidenceColor}`}
              >
                <h4 className="md:text-[35px] text-lg font-bold">
                  {results.confidenceScore}/10
                </h4>
                <p className="text-sm font-bold">
                  {results.confidenceScore >= 8.5
                    ? "Strong"
                    : results.confidenceScore >= 6.5
                    ? "Moderate"
                    : "Tight"}
                </p>
              </div>
              <p className="text-[#7B7B7B] sm:text-lg text-xs">
                Based on your inputs, your application has a{" "}
                {results.confidenceScore >= 8
                  ? "strong chance"
                  : results.confidenceScore >= 5
                  ? "moderate chance"
                  : "low chance"}{" "}
                of being approved.
              </p>
            </div>
          </div>

          {/* LVR, Repayment, Borrowing Range, Serviceability */}
          <div className="w-full lg:w-1/2 grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* LVR */}
            <InfoCard label="LVR" value={`${(results.lvr * 100).toFixed(1)}%`} />

            {/* Repayment */}
            <InfoCard
              label="Repayment"
              value={`${Math.round(results.repayment)}`} 
            />

            {/* Borrowing Power */}
            <InfoCard
              label="Borrowing Power"
             value={formatBorrowingPower(results.borrowingPower)}
            />

            {/* Serviceability */}
            <InfoCard label="Serviceability" 
            value={results.serviceability}
          valueClass={serviceColor} />
          </div>
        </div>

        <h3 className="py-3 font-medium lg:text-[25px] text-base text-[#000000]">
          Ready for Next Step?
        </h3>
        <div className="w-full lg:w-[80%] mx-auto flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-2">
          <button
          onClick={() => handleOpenNext("save")}
           className="cursor-pointer text-center max-w-[355px] lg:w-[355px] w-[250px] px-6 md:py-3 py-2 rounded-2xl text-[#000000] font-extrabold lg:text-[25px] text-base bg-white hover:bg-[#FFAD01] hover:text-white border border-[#FFAD01]">
            Save Results
          </button>
          <button
           onClick={() => handleOpenNext("start")}
           className="cursor-pointer text-center max-w-[355px] lg:w-[355px] w-[250px] px-6 md:py-3 py-2 rounded-2xl text-white font-extrabold lg:text-[25px] text-base bg-[#FFAD01] hover:bg-[#FFAD0199]">
            Start Application with us
          </button>
        </div>
      </div>
    </div>
   
      </>
  );
}

function InfoCard({ label, value,valueClass = "" }) {
  return (
    <div className="flex flex-col items-center justify-center relative bg-white border border-[#C8ACAC] rounded-[10px] py-2">
      <BsExclamationCircleFill className="absolute top-2 right-2 text-[#FFAD01] md:text-xl text-base" />
     <p className="text-[#636363] md:text-base text-sm font-extrabold relative">{label} <span className="text-black text-xl absolute -top-1 font-extrabold">*</span></p>
      <h3
        className={`text-[#000000] lg:text-[30px] text-xl font-bold ${valueClass}`}
      >
        {value}
      </h3>
    </div>
  );
}

export default ScenariosDialogBox;
