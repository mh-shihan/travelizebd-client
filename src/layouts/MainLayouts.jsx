import { Outlet } from "react-router-dom";
import Home from "../pages/home/home/Home";

const MainLayouts = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
