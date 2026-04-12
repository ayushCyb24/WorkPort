const CompanyJobs = ({ company }) => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="bg-white p-6 rounded-xl shadow">
        
        <h2 className="text-lg font-semibold mb-4">Open Positions</h2>

        {company.jobs.length === 0 ? (
          <p className="text-gray-500">No jobs available</p>
        ) : (
          <div className="space-y-4">
            
            {company.jobs.map((job, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg hover:shadow-sm transition"
              >
                <h3 className="font-semibold">{job.title}</h3>

                <p className="text-sm text-gray-500">
                  {job.type} • {job.location}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default CompanyJobs;