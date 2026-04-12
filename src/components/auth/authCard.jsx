import { useSearchParams, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthCard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "login";

  return (
    <div >

     
    
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthCard;