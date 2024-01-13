import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PackageCard from "../../../components/PackageCard";
import { Link } from "react-router-dom";
import useLoadingAnimation from "../../../hooks/useLoadingAnimation";
import Lottie from "lottie-react";

const OurPackagesTab = () => {
  const loadingAnimation = useLoadingAnimation();
  const axiosPublic = useAxiosPublic();
  const { data: tourPackages = [], isLoading } = useQuery({
    queryKey: ["initialPackages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/initialPackages");
      return res.data;
    },
  });

  return (
    <div className="mt-10">
      {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {tourPackages.map((tourPackage) => (
          <PackageCard
            key={tourPackage._id}
            tourPackage={tourPackage}
          ></PackageCard>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/allPackages">
          <button className="btn btn-outline bg-yellow border-yellow text-xl  text-base-100">
            All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPackagesTab;
