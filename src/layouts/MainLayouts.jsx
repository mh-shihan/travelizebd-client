import { Outlet } from "react-router-dom";
import Home from "../pages/home/home/Home";

const MainLayouts = () => {
  return (
    <div>
      <Home></Home>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayouts;
