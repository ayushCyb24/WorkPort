import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black px-4 sm:px-6 py-4 bg-white border-b">

      <div className="flex items-center justify-between">

       
        <Link to='/' className="flex items-center gap-2 font-bold text-xl">
          <span className='text-gray-600'>
            Work<span className='text-green-600 font-bold'>Port</span>
          </span>
        </Link>

      
        <div className="hidden sm:flex items-center ml-10 gap-10 px-6 text-black font-medium">
          
          <Link to="/" className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>

          <Link to="/jobs" className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full">
            Jobs
          </Link>

          <Link to="/companies" className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full">
            Companies
          </Link>

          <Link to="/Community" className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full">
            Community
          </Link>

        </div>

       
        <div className="hidden sm:flex ml-auto items-center gap-2">
          <Link to="/auth" className="px-6 py-2 rounded-full border border-green-500 text-green-500 font-semibold hover:bg-green-50 transition">
            Login
          </Link>

          <Link to="/auth?mode=register" className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
            Register
          </Link>
        </div>

        {/* hamburger for mobile mode */}
        <button 
          onClick={() => setOpen(!open)} 
          className="sm:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* menu for mobile ver.. */}
      {open && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 font-medium">

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/jobs" onClick={() => setOpen(false)}>Jobs</Link>
          <Link to="/companies" onClick={() => setOpen(false)}>Companies</Link>
          <Link to="/Community" onClick={() => setOpen(false)}>Community</Link>

          <div className="flex flex-col gap-2 mt-2">
            <Link to="/auth" className="px-4 py-2 rounded-full border border-green-500 text-green-500 text-center">
              Login
            </Link>

            <Link to="/auth?mode=register" className="px-4 py-2 rounded-full bg-green-600 text-white text-center">
              Register
            </Link>
          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar;