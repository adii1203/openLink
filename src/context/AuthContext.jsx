import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const { user, accessToken, isLoading, setUser } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoading,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
