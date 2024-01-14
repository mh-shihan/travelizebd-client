import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxiosSecure = () => {
  return;
};

export default useAxiosSecure;
