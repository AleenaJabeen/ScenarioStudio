import React from 'react'

function ExpertGuide() {
  return (
    <div className='font-[Inter] w-[85%] lg:w-[66%] py-4 px-2 mx-auto'>
        <h2 className='font-bold text-[#575757] text-2xl lg:text-[45px]'>Want ExpertGuidance? </h2>
        <p className='text-[#656565] text-base lg:text-[21px]'>Fill out the form and our expert will contact u ?</p>
        <form className='w-full lg:w-[70%] mx-auto my-4 flex flex-col gap-2 my-2 py-8 px-2 shadow-md shadow-[#00000040] rounded-2xl'>
            <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-2 ">
          <label htmlFor="property" className="text-[10px] text-[#FFAD01]">
          First Name
          </label>
          <input
            type="text"
            className="text-[#585858] bg-[#FFF9EC] text-xs border-[0.29px] p-3 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
              <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-2 ">
          <label htmlFor="property" className="text-[10px] text-[#FFAD01]">
          Last Name
          </label>
          <input
            type="text"
            className="text-[#585858] bg-[#FFF9EC] text-xs border-[0.29px] p-3 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
              <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-2 ">
          <label htmlFor="property" className="text-[10px] text-[#FFAD01]">
         Email
          </label>
          <input
            type="email"
            className="text-[#585858] bg-[#FFF9EC] text-xs border-[0.29px] p-3 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
              <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-2 ">
          <label htmlFor="property" className="text-[10px] text-[#FFAD01]">
          Mobile Number
          </label>
          <input
            type="text"
            className="text-[#585858] bg-[#FFF9EC] text-xs border-[0.29px] p-3 border-[#B0AFAF] rounded-md focus:outline-none"
          />
        </div>
       <div className="w-full lg:w-[70%] mx-auto cursor-pointer bg-[#FFAD01] mt-4  py-3 text-center rounded-xl mx-2 mb-8 mt-2 text-[#FFFFFF] font-bold text-xl">
        Send
      </div>
        </form>
      
    </div>
  )
}

export default ExpertGuide
