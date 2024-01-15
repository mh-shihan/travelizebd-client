import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto  grid grid-cols-12  pt-24">
        <div className=" col-span-3 lg:col-span-3 min-h-screen pt-8 border">
          <div className="flex gap-3 justify-center items-center">
            <img
              src={user?.photoURL}
              className="w-14 h-14 rounded-full"
              alt=""
            />
            <div>
              <h2 className="text-xl font-medium">{user?.displayName}</h2>
              <p>Role</p>
            </div>
          </div>
          <ul className="menu  font-inter mt-6">
            <li>Home</li>
            <li>Update</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="col-span-9 lg:col-span-9 border">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
