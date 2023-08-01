import { createContext, useState } from "react";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [acessToken, setAcessToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        setAcessToken,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
