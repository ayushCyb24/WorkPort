import CompanyHeader from "../components/company/CompanyHeader";
import CompanyAbout from "../components/company/CompanyAbout";
import CompanyJobs from "../components/company/CompanyJobs";
import { useParams } from "react-router-dom";
import companies from "../data/companiesData";
import { useState } from "react";

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === id);

  const [activeTab, setActiveTab] = useState("overview");

 
  return (
    <>

      <div className="bg-gray-50 min-h-screen">

        <CompanyHeader company={company} />

        
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-6 border-b mb-6">
            
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 font-medium ${
                activeTab === "overview"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => setActiveTab("jobs")}
              className={`pb-2 font-medium ${
                activeTab === "jobs"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Jobs
            </button>

          </div>
        </div>

        
        {activeTab === "overview" && <CompanyAbout company={company} />}
        {activeTab === "jobs" && <CompanyJobs company={company} />}

      </div>
    </>
  );
};

export default CompanyDetails;