import React from "react";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Meta",
    rating: 4.2,
    reviews: 1200,
    logo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    tags: ["Product", "1000+ employees"],
  },
  {
    name: "Netflix",
    rating: 4.5,
    reviews: 900,
    logo: "https://cdn-icons-png.flaticon.com/128/2504/2504929.png",
    tags: ["Streaming", "Global"],
  },
  {
    name: "Spotify",
    rating: 4.3,
    reviews: 700,
    logo: "https://cdn-icons-png.flaticon.com/128/3669/3669986.png",
    tags: ["Music", "Tech"],
  },
  {
    name: "Google",
    rating: 4.6,
    reviews: 2000,
    logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
    tags: ["Tech", "MNC"],
  },
];

const CompanyList = () => {
  return (
    <div>

      
      <p className="mb-4 text-gray-600">
        Showing 4 companies
      </p>

     
      <div className="grid grid-cols-2 gap-6">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>

    </div>
  );
};

export default CompanyList;