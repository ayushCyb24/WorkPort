const TestimonialCard = ({ name, role, message }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
                    hover:shadow-xl hover:-translate-y-1 transition duration-300">
      
   
      <div className="flex mb-3 text-yellow-400 text-lg">
        ★★★★★
      </div>

      
      <p className="text-gray-600 mb-5 leading-relaxed">
        “{message}”
      </p>

     
      <div className="flex items-center gap-3">
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 
                        flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;