import React from "react";

function ScenarioForm() {
  return (
    <form className="font-[Inter] w-[85%] lg:w-[66%] py-4 px-2 mx-auto border-2 border-[#E3E3E3] bg-white rounded-2xl shadow-md shadow-[#00000040] my-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-4">
        <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
            Property Value
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
       
        <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
            Deposit
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
            Your Monthly income (after tax)
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
            Partner's  Monthly income (optional)
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
           Monthly credit and debts commitments 
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
         <div className="flex flex-col gap-2 bg-[#FFF9EC]">
          <label htmlFor="property" className="text-sm text-[#FFAD01]">
           Post Code
          </label>
          <input
            type="text"
            className="text-[#8F8F8F] text-base border-[0.39px] p-2 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="cursor-pointer bg-[#FFAD01] mt-4 p-2 text-center rounded-2xl mx-6 text-[#FFFFFF] font-bold text-xl">
        Get my scenarios
      </div>
    </form>
  );
}

export default ScenarioForm;
