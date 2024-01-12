import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PackageCard from "../../../components/PackageCard";

const OurPackagesTab = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tourPackages = [], isLoading } = useQuery({
    queryKey: ["initialPackages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/initialPackages");
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {tourPackages.map((tourPackage) => (
        <PackageCard
          key={tourPackage._id}
          tourPackage={tourPackage}
        ></PackageCard>
      ))}
    </div>
  );
};

export default OurPackagesTab;
