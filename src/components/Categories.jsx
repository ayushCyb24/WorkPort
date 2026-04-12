import CategoryCard from "./CategoryCard";

const Categories = () => {
  const data = [
    { title: "Development", jobs: 120 },
    { title: "Design", jobs: 80 },
    { title: "Marketing", jobs: 95 },
    { title: "Finance", jobs: 60 },
    { title: "Human Resources", jobs: 40 },
    { title: "Sales", jobs: 70 },
    { title: "Customer Support", jobs: 55 },
    { title: "Remote", jobs: 150 },
  ];

  return (
    <div className="px-6 md:px-16 py-12">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Explore by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <CategoryCard 
            key={index} 
            title={item.title} 
            jobs={item.jobs} 
          />
        ))}
      </div>

    </div>
  );
};

export default Categories;