import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[25vh] text-center px-4 text-white animate-fadeIn">
      
      <div className="flex items-center text-black bg-white/90 backdrop-blur-md shadow-xl 
      rounded-full px-4 py-2 w-full max-w-2xl border border-gray-200 hover:scale-[1.02] transition">

        <div className="flex items-center flex-1 gap-2 px-2">
          
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <input
            type="text"
            placeholder="Job title, keyword or company"
            className="w-full outline-none text-sm"
          />
        </div>

       
        <div className="h-6 w-px bg-gray-500"></div>

       
        <div className="flex items-center flex-1 gap-2 px-2">
          
   
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <input
            type="text"
            placeholder="City, state or zip code"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Button */}
        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition ml-2">
          Find Job
        </button>

      </div>
    </div>
  );
};

export default Searchbar;