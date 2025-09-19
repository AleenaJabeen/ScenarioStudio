import React from 'react'
import { NavLink} from 'react-router-dom'
import { logo } from '../../assets'

function Navbar() {
  return (
    <nav className='flex fixed absolute top-0 bg-[#ffffff] w-full justify-between items-end px-8 py-3 h-[93px] '>
      {/* Logo */}
      <div className='w-[135px] h-[75px]'>
        <img src={logo} alt="Logo" className='w-full h-full object-cover' />
      </div>
      {/* navbar */}
      <div className='flex items-center gap-12 pr-8'>
     
<div className="flex justify-center items-center gap-8 text-base">
  <NavLink 
    to="/home" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
  Home
  </NavLink>

  <NavLink 
    to="/about" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
About
  </NavLink>

  <NavLink 
    to="/services" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
    Services
  </NavLink>

  <NavLink 
    to="/calculation" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
   Calculation
  </NavLink>

  <NavLink 
    to="/process" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
    Process
  </NavLink>

  <NavLink 
    to="/" 
    className={({ isActive }) => 
      isActive ? "text-[#1B3898]" : "text-[#171D26]"
    }
  >
    Scenario Studio
  </NavLink>
</div>

      {/* Contact button */}
      <button className='bg-[#fbbd23] text-[#000000] text-sm font-semibold rounded-[10px] px-5 py-2 '>Get Started</button>
      </div>

      
    </nav>
  )
}

export default Navbar
