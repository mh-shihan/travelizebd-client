import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <div className="bg-base-200 py-3">
      <div className=" max-w-7xl mx-auto">
        <div className="navbar  w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLinks></NavLinks>
              </ul>
            </div>
            <Link to="/">
              <a className=" btn btn-ghost bg-transparent hover:bg-transparent flex flex-col md:flex-row">
                <img src={logo} alt="" />
                <h1 className="text-xl md:text-3xl font-bold">
                  Travelize<span className="text-[#F7B801]">BD</span>
                </h1>
              </a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="signUp">
              <button className="btn btn-sm md:btn bg-yellow md:bg-yellow text-base-100 md:text-base-100">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
