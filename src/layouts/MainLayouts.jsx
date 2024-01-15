import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayouts = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/signUp") ||
    location.pathname.includes("/login");

  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 100,
    });
  }, []);

  return (
    <div>
      {!noHeaderFooter && <Navbar></Navbar>}
      <div data-aos="fade-down" className="">
        <Outlet></Outlet>
      </div>
      {!noHeaderFooter && <Footer></Footer>}
    </div>
  );
};

export default MainLayouts;
