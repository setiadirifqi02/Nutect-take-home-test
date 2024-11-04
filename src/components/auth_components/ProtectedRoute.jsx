import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import LoadingSpiner from "../atoms/LoadingSpiner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <LoadingSpiner />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
