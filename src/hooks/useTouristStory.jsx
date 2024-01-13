import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTouristStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: touristStories = [], isLoading } = useQuery({
    queryKey: "touristStores",
    queryFn: async () => {
      const res = await axiosPublic.get("/touristStories");
      return res.data;
    },
  });
  return [touristStories, isLoading];
};

export default useTouristStory;
