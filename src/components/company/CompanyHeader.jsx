const CompanyHeader = ({ company }) => {
  return (
    <div className="bg-white">
      
      <div className="max-w-5xl mx-auto p-6 flex justify-between items-center">

       
        <div className="flex items-center gap-4">
          
          <img
            src={company.logo}
            alt={company.name}
            className="w-20 h-20 rounded-xl"
          />

          <div>
            <h1 className="text-2xl font-bold">{company.name}</h1>

            <p className="text-gray-600 text-sm">
              ⭐ {company.rating} ({company.reviews} reviews)
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">
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

      
        <div className="text-right">
          
          <p className="text-gray-500 text-sm mb-2">
            1.8K followers
          </p>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            + Follow
          </button>

        </div>

      </div>

    </div>
  );
};

export default CompanyHeader;