import React, { useState } from "react";
import JobCard from "./JobCard";

const JobList = () => {
  const [view, setView] = useState("grid");

  const jobs = [
    {
      title: "Product Designer",
      company: "Meta",
      applicants: 25,
      salary: "$250/hr",
      type: ["Full-time", "Remote"],
      logo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
      posted: "2 days ago",
    },
    {
      title: "UX Designer",
      company: "Netflix",
      applicants: 14,
      salary: "$195/hr",
      type: ["Part-time", "Remote"],
      logo: "https://cdn-icons-png.flaticon.com/128/2504/2504929.png",
      posted: "5 days ago",
    },
    {
      title: "Backend Developer",
      company: "Google",
      applicants: 21,
      salary: "$260/hr",
      type: ["Full-time"],
      logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      posted: "3 days ago",
    },
    {
      title: "SMM Manager",
      company: "Spotify",
      applicants: 73,
      salary: "$170/hr",
      type: ["Full-time", "Part-time"],
      logo: "https://cdn-icons-png.flaticon.com/128/3669/3669986.png",
      posted: "8 days ago",
    },
  ];

  return (
    <div>

     
      <div className="flex justify-between items-center mb-6">
    

        <h2 className="text-2xl font-semibold">
          Recommended Jobs
        </h2>

        <div className="flex items-center gap-4">

          
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 rounded-md text-sm ${
                view === "grid"
                  ? "bg-white shadow"
                  : "text-gray-500"
              }`}
            >
              Grid
            </button>

            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 rounded-md text-sm ${
                view === "list"
                  ? "bg-white shadow"
                  : "text-gray-500"
              }`}
            >
              List
            </button>
          </div>

          
          <button className="border px-4 py-1 rounded-lg text-sm text-gray-600">
            Most recent
          </button>

        </div>
      </div>

      
      <div
        className={`gap-6 ${
          view === "grid"
            ? "grid grid-cols-2"
            : "flex flex-col"
        }`}
      >
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} view={view} />
        ))}
      </div>

    </div>
  );
};

export default JobList;