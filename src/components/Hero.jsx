import React from 'react'
import SearchBar from "./Searchbar";

const Hero = () => {
  return (
    
    <div className='flex flex-col items-center justify-center min-h-[80vh] text-center px-4 
 text-white animate-fadeIn border-b'>
   <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black ">
  Find Your <span className="text-green-600">Dream Job</span>
</h1>

     <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl">
  Discover thousands of opportunities that match your skills and passion
</p>
<div className="absolute  w-[800px] h-[500px] bg-green-300 opacity-10 blur-[120px] rounded-full left-1/2 -translate-x-1/2 -z-10"></div>

 <div className="flex items-center bg-white/90 backdrop-blur-md shadow-xl 
rounded-full px-4 py-3 w-full max-w-2xl border border-gray-200 hover:scale-[1.02] transition">
      
      <input
        type="text"
        placeholder="Job title, keyword or company..."
        className="flex-grow text-black outline-none px-2"
      />

     <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition">
  Search
</button>


    </div>

    </div>
    
  )
}

export default Hero
