import { useState } from "react";

const RegisterForm = () => {
  const [workStatus, setWorkStatus] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow flex flex-col md:flex-row overflow-hidden">

      
      <div className="w-full md:w-2/3 p-5 sm:p-6 md:p-8 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Create your profile
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Search & apply to jobs from India’s top companies
          </p>
        </div>

        <div className="space-y-5">

          
          <div>
            <label className="text-sm font-medium">Full name</label>
            <input
              type="text"
              placeholder="What is your name?"
              className="w-full mt-1 p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

         
          <div>
            <label className="text-sm font-medium">Email ID</label>
            <input
              type="email"
              placeholder="Tell us your Email ID"
              className="w-full mt-1 p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              We'll send relevant jobs and updates to this email
            </p>
          </div>

          
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              className="w-full mt-1 p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              This helps keep your account secure
            </p>
          </div>

         
          <div>
            <label className="text-sm font-medium">Mobile number</label>

            <div className="flex mt-1">
              <span className="px-3 flex items-center border border-r-0 rounded-l-lg bg-gray-50 text-sm">
                +91
              </span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full p-3 text-sm sm:text-base border rounded-r-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Recruiters will contact you on this number
            </p>
          </div>

         
          <div>
            <label className="text-sm font-medium">Work status</label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              
              <div
                onClick={() => setWorkStatus("experienced")}
                className={`p-4 border rounded-lg cursor-pointer ${
                  workStatus === "experienced"
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-gray-400"
                }`}
              >
                <h4 className="font-medium text-sm sm:text-base">I'm experienced</h4>
                <p className="text-xs text-gray-500">
                  I have work experience (excluding internships)
                </p>
              </div>

              <div
                onClick={() => setWorkStatus("fresher")}
                className={`p-4 border rounded-lg cursor-pointer ${
                  workStatus === "fresher"
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-gray-400"
                }`}
              >
                <h4 className="font-medium text-sm sm:text-base">I'm a fresher</h4>
                <p className="text-xs text-gray-500">
                  I am a student or recently graduated
                </p>
              </div>

            </div>
          </div>

        </div>

        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Register
        </button>

        
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs sm:text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* for mobile mode ** */}
        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            className="w-5 h-5"
          />
          <span className="font-medium text-blue-700 text-sm sm:text-base">
            Continue with Google
          </span>
        </button>

      </div>

      {/* right side for the desktop */}
      <div className="hidden md:flex w-1/3 border-l p-6 md:p-8 flex-col justify-center gap-6 bg-gray-50">

        <div className="space-y-3">
          <p className="text-sm px-2 font-medium text-black">
            Continue with
          </p>

          <button className="border px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              className="w-5 h-5"
            />
            <span className="font-medium text-blue-700">Google</span>
          </button>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>✔ Build your profile and get noticed</p>
          <p>✔ Get job alerts on email</p>
          <p>✔ Discover better opportunities</p>
        </div>

      </div>

    </div>
  );
};

export default RegisterForm;