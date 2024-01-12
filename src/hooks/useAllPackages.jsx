import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllPackages = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allPackages = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allPackages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allPackages");
      return res.data;
    },
  });
  return [allPackages, isLoading, refetch];
};

export default useAllPackages;
