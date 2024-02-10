import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecureInstance = axios.create({
  baseURL: "https://travelizebd-server.vercel.app/api/v1",
});
const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  // Request Interceptors
  axiosSecureInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      //   console.log("request stop by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //   Response Interceptors
  axiosSecureInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("Inside response interceptors", status);
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecureInstance;
};

export default useAxiosSecure;
