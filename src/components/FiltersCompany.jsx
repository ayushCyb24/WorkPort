import React from "react";

const Filters = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-4">All Filters</h2>

      {/* ---------------- COMPANY TYPE ---------------- */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Company type</h3>

        <div className="flex flex-col gap-3 text-sm text-gray-700">

          {[
            { name: "Corporate", count: 4869 },
            { name: "Foreign MNC", count: 1626 },
            { name: "Startup", count: 821 },
            { name: "Indian MNC", count: 660 },
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              <span>
                {item.name}{" "}
                <span className="text-gray-400">
                  ({item.count})
                </span>
              </span>

            </label>
          ))}

        </div>
      </div>

      <hr className="my-6" />

     
      <div>
        <h3 className="font-medium mb-3">Location</h3>

    
        <div className="flex items-center border rounded-full px-4 py-2 mb-4">
          
          <input
            type="text"
            placeholder="Search Location"
            className="outline-none text-sm w-full"
          />
        </div>

       
        <div className="flex flex-col gap-3 text-sm text-gray-700 max-h-[180px] overflow-y-auto">

          {[
            { name: "Bengaluru", count: 3703 },
            { name: "Delhi / NCR", count: 3620 },
            { name: "Mumbai (All Areas)", count: 3167 },
            { name: "Hyderabad", count: 2605 },
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              <span>
                {item.name}{" "}
                <span className="text-gray-400">
                  ({item.count})
                </span>
              </span>

            </label>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Filters;