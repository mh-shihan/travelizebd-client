import { Outlet, useLocation } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Navbar from "../pages/home/navbar/Navbar";

const MainLayouts = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/signUp") ||
    location.pathname.includes("/login");

  return (
    <div>
      {!noHeaderFooter && (
        <>
          <Navbar></Navbar>
          <Home></Home>
        </>
      )}

      <div className="max-w-7xl mx-auto px-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
