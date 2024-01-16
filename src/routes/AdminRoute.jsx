import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useLoadingAnimation from "../hooks/useLoadingAnimation";
import Lottie from "lottie-react";

const AdminRoute = ({ children }) => {
  const loadingAnimation = useLoadingAnimation();
  const { user, loading } = useAuth();
  const { isAdmin, adminLoading } = useAdmin();
  const location = useLocation();

  if (loading || adminLoading) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (loading === undefined) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (user && isAdmin?.admin) {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default AdminRoute;
