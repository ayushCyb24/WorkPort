const Companies = () => {
 const logos = [
    "./logos/companiesLogo.png", 
 ];

  const allLogos = [...logos, ...logos];

  return (
    <div className="py-10 bg-gray-50">
      
      <h2 className="text-center text-2xl font-bold mb-6 ">
        Our Hiring Partners
      </h2>

      <div className="overflow-hidden">
        
        <div className="flex animate-scroll w-max">
          
          
          <div className="flex gap-10">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="h-10 object-contain"
              />
            ))}
          </div>

          
          <div className="flex gap-10 ml-10">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="h-10 object-contain"
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Companies;