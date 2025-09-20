import React, { useState } from "react";
import ScenarioDialogBox from "./ScenarioDialogBox";
import ResultsScenarioDialogBox from "./ResultsScenarioDialogBox";

function ScenarioForm() {
  // for dialog box
  const [showScenarioDialog, setShowScenarioDialog] = useState(false);
  const [nextDialog, setNextDialog] = useState(null);
  const [formData, setFormData] = useState({
    propertyValue: "",
    deposit: "",
    monthlyIncome: "",
    partnerIncome: "",
    monthlyDebts: "",
    postCode: "",
    employmentType: "Employed",
  });

  const [errors, setErrors] = useState({});

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // numeric fields only digits
    const numericFields = [
      "propertyValue",
      "deposit",
      "monthlyIncome",
      "partnerIncome",
      "monthlyDebts",
    ];

    let newValue = value;

    if (numericFields.includes(name)) {
      newValue = value.replace(/[^0-9]/g, ""); // only numbers
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.propertyValue) newErrors.propertyValue = "Required";
    if (!formData.deposit) newErrors.deposit = "Required";
    if (!formData.monthlyIncome) newErrors.monthlyIncome = "Required";
    if (!formData.monthlyDebts) newErrors.monthlyDebts = "Required";
    if (!formData.postCode) newErrors.postCode = "Required";
    if (!formData.employmentType) newErrors.employmentType = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // open dialogbox with data
    setShowScenarioDialog(true);
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      className="font-[Inter] w-[85%] lg:w-[66%] py-4 px-2 mx-auto border-2 border-[#E3E3E3] bg-white rounded-2xl shadow-md shadow-[#00000040] my-4"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-4">
        {/* Property Value */}
        <div className="flex flex-col gap-2">
          <label htmlFor="propertyValue" className="text-sm text-[#FFAD01]">
            Property Value
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8F8F] text-sm">
              $
            </span>
            <input
              type="text"
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
              className="text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] p-2 pl-6 border-[#B0AFAF] rounded-md focus:outline-none w-full"
            />
          </div>
          {errors.propertyValue && (
            <span className="text-red-500 text-xs">{errors.propertyValue}</span>
          )}
        </div>

        {/* Deposit */}
        <div className="flex flex-col gap-2">
          <label htmlFor="deposit" className="text-sm text-[#FFAD01]">
            Deposit
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8F8F] text-sm">
              $
            </span>
            <input
              type="text"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] p-2 pl-6 border-[#B0AFAF] rounded-md focus:outline-none w-full"
            />
          </div>
          {errors.deposit && (
            <span className="text-red-500 text-xs">{errors.deposit}</span>
          )}
        </div>

        {/* Monthly Income */}
        <div className="flex flex-col gap-2">
          <label htmlFor="monthlyIncome" className="text-sm text-[#FFAD01]">
            Your Monthly income (after tax)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8F8F] text-sm">
              $
            </span>
            <input
              type="text"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className="text-[#8F8F8F] text-base bg-[#FFF9EC] border-[0.39px] p-2 pl-6 border-[#B0AFAF] rounded-md focus:outline-none w-full"
            />
          </div>
          {errors.monthlyIncome && (
            <span className="text-red-500 text-xs">{errors.monthlyIncome}</span>
          )}
        </div>

        {/* Partner Income */}
        <div className="flex flex-col gap-2">
          <label htmlFor="partnerIncome" className="text-sm text-[#FFAD01]">
            Partner's Monthly income (optional)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8F8F] text-sm">
              $
            </span>
            <input
              type="text"
              name="partnerIncome"
              value={formData.partnerIncome}
              onChange={handleChange}
              className="text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] p-2 pl-6 border-[#B0AFAF] rounded-md focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Monthly Debts */}
        <div className="flex flex-col gap-2">
          <label htmlFor="monthlyDebts" className="text-sm text-[#FFAD01]">
            Monthly credit and debts commitments
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8F8F] text-sm">
              $
            </span>
            <input
              type="text"
              name="monthlyDebts"
              value={formData.monthlyDebts}
              onChange={handleChange}
              className="text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] p-2 pl-6 border-[#B0AFAF] rounded-md focus:outline-none w-full"
            />
          </div>
          {errors.monthlyDebts && (
            <span className="text-red-500 text-xs">{errors.monthlyDebts}</span>
          )}
        </div>

        {/* Post Code */}
        <div className="flex flex-col gap-2">
          <label htmlFor="postCode" className="text-sm text-[#FFAD01]">
            Post Code
          </label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
            className="text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
          {errors.postCode && (
            <span className="text-red-500 text-xs">{errors.postCode}</span>
          )}
        </div>

        {/* Employment Type */}
        <div className="flex flex-col gap-2">
          <label htmlFor="employmentType" className="text-sm text-[#FFAD01]">
            Employment type
          </label>
          <div className="w-full text-[#8F8F8F] bg-[#FFF9EC] text-base border-[0.39px] border-[#B0AFAF] rounded-md focus:outline-none">
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="inline-block focus:outline-none p-2"
            >
              <option value="PAYG">PAYG</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Contractor">Contractor</option>
            </select>
          </div>
          {errors.employmentType && (
            <span className="text-red-500 text-xs">{errors.employmentType}</span>
          )}
        </div>
      </div>


      {/* Submit */}
      <div
        onClick={handleSubmit}
        className="cursor-pointer bg-[#FFAD01] mt-4 p-2 text-center rounded-2xl mx-6 text-[#FFFFFF] font-bold text-xl"
      >
        Get my scenarios
      </div>

      {/* Dialog Box with data */}
       {showScenarioDialog && (
        <ScenarioDialogBox
          onClose={() => setShowScenarioDialog(false)}
          data={formData}
          openNextDialog={(type) => {
            setShowScenarioDialog(false); // close first dialog
            setNextDialog(type);          // open second dialog
          }}
        />
      )}
      {nextDialog && (
        <ResultsScenarioDialogBox
          onClose={() => setNextDialog(null)}
          heading={
            nextDialog === "save" ? "Save your scenario" : "Start your application"
          }
        />
      )}
    </form>
  );
}

export default ScenarioForm;
