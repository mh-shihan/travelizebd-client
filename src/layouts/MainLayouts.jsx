import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";

const MainLayouts = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/signUp") ||
    location.pathname.includes("/login");

  return (
    <div>
      {!noHeaderFooter && <Navbar></Navbar>}
      <div className="">
        <Outlet></Outlet>
      </div>
      {!noHeaderFooter && <Footer></Footer>}
    </div>
  );
};

export default MainLayouts;
