import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Home from "./home/Home";

const ProtectedRoute = () => {
  const { user, isLoading } = useContext(AuthContext);
  return <>{isLoading ? null : user.userName ? <Outlet /> : <Home />}</>;
};

export default ProtectedRoute;
