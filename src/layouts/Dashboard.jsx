import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";
import useAuth from "../hooks/useAuth";
import DashboardLinks from "../pages/dashboard/DashboardLinks";
import AOS from "aos";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //   TODO: Your role related work hove to be finished
  const { data: profileUser = {} } = useQuery({
    queryKey: ["Profile user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/role?email=${user?.email}`);
      return res.data;
    },
  });

  AOS.init();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-1  grid grid-cols-12  pt-24">
        <div className=" col-span-3 lg:col-span-3 min-h-screen pt-8 border-2 border-r-transparent border-base-300">
          <div className="flex gap-3 justify-center items-center">
            <img
              src={user?.photoURL}
              className="w-14 h-14 rounded-full"
              alt=""
            />
            <div>
              <h2 className="text-xl font-medium">{user?.displayName}</h2>
              <p className="text-sm">
                {profileUser?.role ? profileUser?.role : "tourist"}
              </p>
            </div>
          </div>
          <ul className="menu font-inter  text-base mt-2 font-light">
            <DashboardLinks></DashboardLinks>
          </ul>
        </div>
        <div className="col-span-9 lg:col-span-9 border-2 border-base-300 p-10 ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
