import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const { user, accessToken, isLoading, setUser, setAccessToken } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoading,
        setUser,
        setAccessToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
