import React from "react";

const JobCard = ({ job, view }) => {
  return (
    
    <div
      className={`relative bg-white p-4 rounded-xl shadow border border-gray-300 ${
        view === "list" ? "flex justify-between items-center" : ""
      }`}
      
    >
        
<button className="absolute top-3 right-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-400 hover:text-green-600 transition"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
    />
  </svg>
</button>
      
      <div className="flex gap-4">

         <img
                src={job.logo}
                alt={job.company}
                className="w-10 h-10 rounded-lg object-contain "
            />
        <div>
          <h1 className="font-semibold text-lg mb-1">
            {job.title}
          </h1>

          <button className="text-sm text-gray-500 mb-3">
            {job.company} • {job.applicants} Applicants
          </button>

          
          <div className="flex gap-2 flex-wrap">
            {job.type.map((t, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  t === "Full-time"
                    ? "bg-green-100 text-green-600"
                    : t === "Part-time"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

     
      <div className="text-right mt-4">
        <p className="font-semibold text-lg">
          {job.salary}
        </p>
        <p className="text-gray-400 text-sm">
          {job.posted}
        </p>
      </div>

    </div>
  );
};

export default JobCard;