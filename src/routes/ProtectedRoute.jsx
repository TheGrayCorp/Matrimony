import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("idToken");
  return token ? <Outlet /> : <Navigate to="/authentication" replace />;
};

export default ProtectedRoute;
