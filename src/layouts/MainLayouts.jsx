import { Outlet, useLocation } from "react-router-dom";
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
        </>
      )}

      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
