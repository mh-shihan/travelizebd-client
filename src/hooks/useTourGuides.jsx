import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTourGuides = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tourGuideRoles = [] } = useQuery({
    queryKey: ["tourGuideRoles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tourGuideRoles");
      return res.data;
    },
  });
  return [tourGuideRoles];
};

export default useTourGuides;
