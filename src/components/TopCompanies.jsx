import React, { useRef } from "react";

const categories = [
  { title: "MNCs", count: "2K+ Companies" },
  { title: "Internet", count: "248 Companies" },
  { title: "Manufacturing", count: "1.2K+ Companies" },
  { title: "Fortune 500", count: "164 Companies" },
  { title: "Product", count: "1.3K+ Companies" },
];

const TopCompanies = () => {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 hover:">

      
      <h2 className="text-2xl font-semibold mb-6">
        Top companies hiring now
      </h2>

      
      <div className="relative bg-[#e9e9f2] rounded-2xl p-6">

       
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer hover:-translate-y-1
                         transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                {item.count} →
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
        >
          →
        </button>

      </div>
    </div>
  );
};

export default TopCompanies;