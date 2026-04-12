import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      
      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-bold">Sign In</h2>

        <p className="text-sm text-gray-500 mt-1">
          New user?{" "}
          <span
            onClick={() => navigate("/auth?mode=register")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Create account
          </span>
        </p>
      </div>

      {/* INPUTS */}
      <div className="space-y-3">
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      
      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
        Sign In
      </button>

      
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      
      <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
        
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          alt="google"
          className="w-5 h-5"
        />

        <span className="text-sm font-medium">
          Continue with Google
        </span>

      </button>

    </div>
  );
};

export default LoginForm;