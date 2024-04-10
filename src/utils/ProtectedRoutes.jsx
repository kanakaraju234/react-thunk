import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext/AuthContext";

export const ProtectedRoutes = () => {
  let auth = { token: "tokengenerated" };
  const { token } = useAuth();
  console.log("token", token);
  const isTokenExist = localStorage.getItem("token");
  return isTokenExist?.length > 0 ? <Outlet /> : <Navigate to="/login" />;
};
