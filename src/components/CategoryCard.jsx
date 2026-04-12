const CategoryCard = ({ title, jobs }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
      
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      
      <p className="text-gray-500 text-sm">{jobs} jobs</p>

    </div>
  );
};

export default CategoryCard;