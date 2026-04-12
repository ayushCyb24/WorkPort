import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border hover:shadow-md transition flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 cursor-pointer">

    
      <div className="flex gap-3 sm:gap-4 items-start sm:items-center">

        <img
          src={company.logo}
          alt={company.name}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain"
        />

        <div>
          <h3 className="font-semibold text-base sm:text-lg">
            {company.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
            ⭐ {company.rating} | {company.reviews} reviews
          </p>

         
          <div className="flex gap-2 mt-2 flex-wrap">
            {company.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="text-lg sm:text-xl text-gray-400 self-end sm:self-auto">
        →
      </div>

    </div>
  );
};

export default CompanyCard;