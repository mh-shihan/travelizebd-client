import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import NavLinks from "./NavLinks";
import useAuth from "../../../hooks/useAuth";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  const profile = (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        {user && (
          <img src={user?.photoURL} className="w-12 h-12 rounded-full"></img>
        )}
      </div>
      <ul
        tabIndex={0}
        className=" dropdown-content z-[1] menu p-4 shadow-md bg-base-100 rounded-box  bg-transparent text-base-100 border  "
      >
        <li>{user?.displayName}</li>
        <hr className="my-2" />
        <li>{user?.email}</li>
        <hr className="mt-2" />
        <li>
          <button className="hover:bg-transparent hover:text-yellow ">
            Dashboard
          </button>
        </li>
        <hr />
        <li>
          <button
            onClick={handleLogout}
            className="hover:bg-transparent hover:text-yellow "
          >
            Logout
            <span className="text-lg font-medium">
              <CiLogout />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="bg-base-200 py-3 w-full z-[50] bg-transparent fixed mb-20 ">
      <div className=" max-w-7xl mx-auto">
        <div className="navbar  w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-yellow lg:hidden"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 bg-opacity-85 rounded-box w-52"
              >
                <NavLinks></NavLinks>
              </ul>
            </div>
            <Link to="/">
              <div className="btn btn-ghost bg-transparent hover:bg-transparent flex flex-col md:flex-row ">
                <img src={logo} className="hidden md:block" />
                <h1 className="text-xl md:text-3xl font-bold text-white">
                  Travelize<span className="text-[#F7B801]">BD</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <Link to="/signUp">
                <button className="btn btn-sm md:btn bg-yellow md:bg-yellow hover:scale-105 hover:bg-yellow hover:border-yellow text-base-100 md:text-base-100 border-yellow md:border-yellow px-1 ">
                  Register
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm md:btn bg-yellow md:bg-yellow hover:bg-yellow text-base-100 md:text-base-100 border-yellow md:border-yellow">
                  Login
                </button>
              </Link>
            )}
            <>{profile}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
