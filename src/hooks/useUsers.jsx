import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["allUsers", "adminOnly"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, usersLoading];
};

export default useUsers;
