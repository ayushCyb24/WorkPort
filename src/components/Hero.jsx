import React from 'react'

const Hero = () => {
  return (
    
    <div className="flex flex-col items-center justify-center text-center px-4 
    py-12 sm:py-16 md:py-20 border-b">

      
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-black">
        Find Your <span className="text-green-600">Dream Job</span>
      </h1>

    
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md sm:max-w-xl">
        Discover thousands of opportunities that match your skills and passion
      </p>

     
      <div className="absolute w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] 
      bg-green-300 opacity-10 blur-[100px] rounded-full left-1/2 -translate-x-1/2 -z-10"></div>

     
      <div className="flex items-center bg-white/90 backdrop-blur-md shadow-lg 
      rounded-full px-3 py-2 w-full max-w-md border border-gray-200">

        <input
          type="text"
          placeholder="Job title, keyword or company..."
          className="flex-grow text-black outline-none px-2 text-sm sm:text-base"
        />

        <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition">
          Search
        </button>

      </div>

    </div>
  )
}

export default Hero