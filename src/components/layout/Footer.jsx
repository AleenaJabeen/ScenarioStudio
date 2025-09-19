import React from "react";
import { logo } from "../../assets";
import { FaInstagram,FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

function Footer() {
  return (
    <>
    <div className="flex flex-col justify-between items-start px-12 bg-[#FFC107] py-16 mt-6">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start  gap-12 ">
      <div className="flex flex-col gap-4 lg:w-[40%] w-full items-start justify-start">
    
          <img src={logo} alt="Logo" className="w-[193px] h-[113px]"/>
          <p className="text-base text-black ">
            Premium lending solutions with strategic clarity. Empowering
            property investors across Sydney with expert guidance and tailored
            support.
          </p>
        
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-6">
        <h3 className="text-[22px] text-black font-bold ">Contact Us</h3>
        <h4 className="flex items-center gap-2 font-normal"><TbMailFilled className="text-4xl" /><span className="text-base text-black">hello@brighttrackfinance.com</span></h4>
        <h4 className="flex items-center gap-2"><FaMapMarkerAlt className="text-4xl" /><span className="text-base text-black">Sydney, Australia</span></h4>
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-3">
        <h3 className="text-[22px] text-black font-bold">Quick Links</h3>
        <h4 className="text-base text-black font-semibold cursor-pointe">About</h4>
        <h4 className="text-base text-black font-semibold cursor-pointe">Services</h4>
        <h4 className="text-base text-black font-semibold cursor-pointe">Calculator</h4>
        <h4 className="text-base text-black font-semibold cursor-pointe">Process</h4>
        <h4 className="text-base text-black font-semibold cursor-pointe">Scenario Studio</h4>

      </div>
    </div>
    <div className="flex flex-col gap-4 pt-6">
    <div className="flex items-center gap-4  text-3xl">
          <FaLinkedinIn />
          <FaInstagram />
        </div>

    <p className="text-black text-sm">© 2025 BrightTrack Finance. All rights reserved.</p>
    </div>
    </div>
    </>
  );
}

export default Footer;
