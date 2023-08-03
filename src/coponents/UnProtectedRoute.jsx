import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UnProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  return (
    <>{user.userName ? <Navigate to={"/"} replace={true} /> : <Outlet />}</>
  );
};

export default UnProtectedRoute;
