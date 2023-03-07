import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function PublicRoute() {
  const { authorization } = useAuthContext();
  const location = useLocation();

  if (authorization.email) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
