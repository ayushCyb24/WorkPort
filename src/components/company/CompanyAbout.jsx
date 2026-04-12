const CompanyAbout = ({ company }) => {
  return (
  <div className="max-w-5xl mx-auto px-6 pb-6">
      
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        
        <h2 className="text-lg font-semibold mb-2">About Company</h2>

        <p className="text-gray-600 mb-4">
          {company.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {company.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
};

export default CompanyAbout;