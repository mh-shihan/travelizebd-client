import axios from "axios";

const axiosPublicInstance = axios.create({
  baseURL: "https://travelizebd-server.vercel.app/api/v1",
});
const useAxiosPublic = () => {
  return axiosPublicInstance;
};

export default useAxiosPublic;
