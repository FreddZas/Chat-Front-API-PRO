import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return <>{user ? children : <Navigate to="/auth/login" />}</>;
}

export default ProtectedRoute;
