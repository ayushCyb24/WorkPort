import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-black px-6 py-4 flex items-center bg-white  border-b">
     
      <Link to='/' className="flex items-center gap-10 font-bold text-xl cursor-pointer">
        <span className="  p-1 rounded-md  "></span>
        <span className='text-green-600 '>JobPortal</span>
      </Link>
    

       <div className="flex items-center ml-10 gap-10 px-6 text-black font-medium">
       <Link 
           to="/" 
         className="hover: relative inline-block after:content-[''] after:absolute after:left-1/2      after:-translate-x-1/2 after:-bottom-1.5 
         after:w-0 after:h-[2px] after:bg-gray-400 
         after:transition-all after:duration-300 
         hover:after:w-full">Home</Link>
        <Link 
           to="/jobs"
         className="hover: relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
        >Jobs
        </Link>
        <Link to="/companies"
         className="hover: relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 
         after:w-0 after:h-[2px] after:bg-gray-400 
         after:transition-all after:duration-300 
         hover:after:w-full">Companies</Link>
        <Link 
        to="/Community"
         className="hover: relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 
         after:w-0 after:h-[2px] after:bg-gray-400 
         after:transition-all after:duration-300 
        hover:after:w-full">Community</Link>
       </div>
       
        
      <div className=" ml-auto flex items-center gap-4">
      
        <div className="flex items-center gap-2 cursor-pointer">
        
          <span className="hidden sm:block">Sign In</span>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
