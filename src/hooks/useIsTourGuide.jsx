import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsTourGuide = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isTourGuide = false } = useQuery({
    queryKey: ["roleOFTourGuide"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourGuides/${user?.email}`);
      return res.data;
    },
  });

  return { isTourGuide };
};

export default useIsTourGuide;
