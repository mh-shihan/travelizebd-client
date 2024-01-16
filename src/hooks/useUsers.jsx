import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ["allUsers", "adminOnly"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, refetch, usersLoading];
};

export default useUsers;
