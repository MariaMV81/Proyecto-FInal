import { createContext, useState, useContext, useMemo } from "react";
import { MY_AUTH_APP } from "../../const/AuthContext";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({
  authorization: {
    email: null,
    rol: null,
  },
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  async function login(user) {
  const response = await fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) {
      setErrorMessage("Error al introducir los datos");
    } else {
      const token = await response.json();
      setErrorMessage("Usuario logueado.");
      setAuthorization(jwtDecode(token.jwt));
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwtDecode(token.jwt))
      );

      setErrorMessage(null);
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      email: null,
      role: null,
    });
    {login? "Logout" : login}
  }

  const value = useMemo(
    () => ({
      authorization,
      login,
      logout,
      errorMessage,
    }),
    [authorization, login, logout, errorMessage]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
