import Lottie from "lottie-react";
import useAuth from "../hooks/useAuth";
import useLoadingAnimation from "../hooks/useLoadingAnimation";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loadingAnimation = useLoadingAnimation();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (loading === undefined) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
