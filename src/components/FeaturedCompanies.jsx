import React, { useRef } from "react";

const companies = [
  {
    name: "Cognizant",
    desc: "Leading ITES company with global presence.",
    rating: "3.7",
    reviews: "61.1K+ reviews",
    logo: "https://tse1.explicit.bing.net/th/id/OIP.GrDG1294nCRakSFaKWlSxAHaGQ?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Google",
    desc: "Do the right thing.",
    rating: "4.1",
    reviews: "5.1K+ reviews",
    logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
  },
  {
    name: "Wipro",
    desc: " Global leader in IT, consulting and business process services.",
    rating: "3.8",
    reviews: "45.2K+ reviews",
    logo: "https://companieslogo.com/img/orig/WIT-1453b096.png?t=1739861069",
  },
  {
    name: "HCL Technologies",
    desc: "Superchargin Progress.",
    rating: "4.0",
    reviews: "45K+ reviews",
    logo: "https://companieslogo.com/img/orig/HCLTECH.NS_BIG-eadcb2fa.png?t=1723784865",
  },
  {
    name: "Adobe",
    desc: "Changing the world through digital experiences.",
    rating: "4.8",
    reviews: "45k+ reviews",
    logo: "https://companieslogo.com/img/orig/ADBE_BIG-1544171f.png?t=1740130206",
  },
];

const FeaturedCompanies = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 py-10 md:py-16 bg-white">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8 md:mb-12">
        Featured companies actively hiring
      </h2>

      <div className="relative">

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 sm:px-6 md:px-10 scrollbar-hide snap-x snap-mandatory"
        >
            
          {companies.map((company, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] bg-white border border-gray-200 rounded-2xl p-5 sm:p-6
                         shadow-sm hover:shadow-md hover:-translate-y-1
                         transition duration-300 flex flex-col"
            >
              
              <img
                src={company.logo}
                alt={company.name}
                className="h-9 sm:h-10 mb-4 object-contain"
              />

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {company.name}
              </h3>

              <div className="mt-3 bg-gray-100 rounded-lg px-3 py-2 text-xs sm:text-sm flex gap-2 items-center">
                <span className="text-yellow-500">★</span>
                <span className="font-medium">{company.rating}</span>
                <span className="text-gray-500">{company.reviews}</span>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                {company.desc}
              </p>

            
              <button className="mt-auto px-4 py-2 text-green-600 bg-green-50 rounded-full hover:bg-green-100 transition">
                View jobs
              </button>
            </div>
          ))}
        </div>
       
       
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 
             w-10 h-10 rounded-full border bg-white shadow 
             items-center justify-center
             hover:scale-110 transition z-10"
        >
           ←
        </button>

        
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 
                     w-10 h-10 rounded-full border bg-white shadow 
                     items-center justify-center
                     hover:scale-110 transition"
        >
          →
        </button>

      </div>

      <div className="text-center mt-10 md:mt-14">
        <button className="px-6 py-3 border border-blue-500 text-blue-600
                           rounded-full hover:bg-blue-50 transition">
          View all companies
        </button>
      </div>

    </section>
  );
};

export default FeaturedCompanies;