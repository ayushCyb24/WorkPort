import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const data = [
    {
      name: "Amit Sharma",
      role: "Frontend Developer",
      message: "This platform helped me land my dream job in just 2 weeks!",
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      message: "The job recommendations were spot on. Highly recommended!",
    },
    {
      name: "Rahul Singh",
      role: "Backend Developer",
      message: "Clean UI and easy application process. Loved it!",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gradient-to-b from-gray-50 to-white">
      
     <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
  Loved by Job Seekers ❤️
</h2>

<p className="text-center text-gray-500 mb-10">
  Thousands of people are already finding their dream jobs
</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
};

export default Testimonials;