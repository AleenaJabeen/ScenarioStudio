import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import emailjs from "emailjs-com";

function ResultsScenarioDialogBox({ onCloseDialog, heading }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{8,15}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // ✅ get stored results from localStorage
    const scenarioResults =
      JSON.parse(localStorage.getItem("scenarioResults")) || {};
      console.log(scenarioResults);

    // ✅ prepare email template params
    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.mobile,
      property_value: scenarioResults.propertyValue || "",
      loan_amount: scenarioResults.loanAmount || "",
      repayment: scenarioResults.repayment || "",
      borrowing_power: scenarioResults.borrowingPower || "",
      confidence_score: scenarioResults.confidenceScore || "",
      serviceability: scenarioResults.serviceability || "",
      lvr: scenarioResults.lvr || "",
      heading: heading,
      to_email: `${form.email,"hello@brighttrackfinance.com"}`, 
    };

    emailjs
      .send(
        "service_p4bevuk", 
        "template_jk8y70c",
        templateParams,
        "EJ2mbzMUof6cotpZB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Results sent successfully!");
          onCloseDialog();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send results. Please try again.");
        }
      );
  };

  return (
    <div className="font-[Inter] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="bg-[#FFF9EC] max-w-[1055px] lg:w-[80vw] md:[75vw] w-[95vw] h-[70vh] rounded-[20px] md::py-[35px] md:px-[70px] p-[20px] py-[30px] shadow-xl relative flex flex-col overflow-y-scroll no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onCloseDialog}
          className="absolute top-6 right-4 cursor-pointer text-3xl text-black"
        >
          <CgClose />
        </button>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#0C0C0C] md:text-[35px] text-xl font-bold">
            {heading}
          </h2>
          <p className="text-[#656565] md:text-[21px] text-base text-center">
            {heading.includes("Save")
              ? "Save your scenario — just share your details and we’ll send it straight to your inbox."
              : "Great choice! To begin your mortgage application, please share a few details and our team will guide you through the next steps."}
          </p>
        </div>

        <div
        
          className="w-full bg-white lg:w-[40%] mx-auto my-6 flex flex-col gap-2 py-8 px-2 shadow-md shadow-[#00000040] rounded-2xl"
        >
          {["firstName", "lastName", "email", "mobile"].map((field) => (
            <div
              key={field}
              className="w-full lg:w-[80%] mx-auto flex flex-col gap-1"
            >
              <label
                htmlFor={field}
                className="text-[10px] text-[#FFAD01] capitalize"
              >
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className={`text-[#585858] bg-[#FFF9EC] text-xs border p-3 rounded-md focus:outline-none ${
                  errors[field] ? "border-red-500" : "border-[#B0AFAF]"
                }`}
              />
              {errors[field] && (
                <span className="text-red-500 text-xs">{errors[field]}</span>
              )}
            </div>
          ))}

          <button
          onClick={handleSubmit}
            className="w-[80%] mx-auto cursor-pointer bg-[#FFAD01] mt-4 py-3 text-center rounded-xl text-[#FFFFFF] font-bold text-xl"
          >
            Send me results
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsScenarioDialogBox;
