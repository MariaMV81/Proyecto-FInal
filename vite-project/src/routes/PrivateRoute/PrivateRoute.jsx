import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ROLES } from "../../const/roles";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function PrivateRoute({allowedRoles}) {
  const { authorization } = useAuthContext();
  const location = useLocation();

  return (allowedRoles.includes(authorization.rol)  ? (
    <Outlet />
  ) : authorization?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  ))
}
