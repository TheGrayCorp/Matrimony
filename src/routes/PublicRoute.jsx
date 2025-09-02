import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("idToken");
  return token ? <Navigate to="/completeprofile" replace /> : <Outlet />;
};

export default PublicRoute;
