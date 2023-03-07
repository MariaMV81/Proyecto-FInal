import "./Login-Register.css";
import { useState } from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleLogin = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      {isRegistering ? (
        <RegisterForm toggleLogin={toggleLogin} />
      ) : (
        <LoginForm toggleLogin={toggleLogin} />
      )}
    </>
  );
}
