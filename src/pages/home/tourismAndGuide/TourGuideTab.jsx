import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useLoadingAnimation from "../../../hooks/useLoadingAnimation";
import TourGuideCard from "../../../components/TourGuideCard";
import Lottie from "lottie-react";

const TourGuideTab = () => {
  const axiosPublic = useAxiosPublic();
  const loadingAnimation = useLoadingAnimation();

  const { data: tourGuides = [], isLoading } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tourGuides");
      return res.data;
    },
  });

  return (
    <div className="mt-10">
      {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
      <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tourGuides.map((tourGuide) => (
          <TourGuideCard
            key={tourGuide._id}
            tourGuide={tourGuide}
          ></TourGuideCard>
        ))}
      </div>
    </div>
  );
};

export default TourGuideTab;
