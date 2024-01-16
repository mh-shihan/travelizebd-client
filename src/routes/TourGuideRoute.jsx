import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLoadingAnimation from "../hooks/useLoadingAnimation";
import useIsTourGuide from "../hooks/useisTourGuide";
import Lottie from "lottie-react";

const TourGuideRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isTourGuide, tourGuideLoading } = useIsTourGuide();
  const loadingAnimation = useLoadingAnimation();
  const location = useLocation();

  if (loading || tourGuideLoading) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (loading === undefined) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }
  if (user && isTourGuide?.tourGuide) {
    return children;
  }
  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default TourGuideRoute;
