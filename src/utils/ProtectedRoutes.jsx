import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  let auth = { token: "tokengenerated" };
  return auth.token.length > 0 ? <Outlet /> : <Navigate to="/login" />;
};
