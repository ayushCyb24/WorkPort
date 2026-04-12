import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border hover:shadow-md transition flex justify-between items-center cursor-pointer">

  
      <div className="flex gap-4 items-center">

           
            <img
                src={company.logo}
                alt={company.name}
                className="w-10 h-10 rounded-lg object-contain "
            />

     
        <div>
          <h3 className="font-semibold text-lg">
            {company.name}
          </h3>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            ⭐ {company.rating} | {company.reviews} reviews
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {company.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div className="text-xl text-gray-400">
        →
      </div>

    </div>
  );
};

export default CompanyCard;