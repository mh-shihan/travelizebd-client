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
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        {user && (
          <img src={user?.photoURL} className="w-12 h-12 rounded-full"></img>
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box font-medium "
      >
        <li>{user?.displayName}</li>
        <hr className="my-2" />
        <li>{user?.email}</li>
        <hr className="mt-2" />
        <li>
          <button className="hover:bg-transparent">Dashboard</button>
        </li>
        <hr />
        <li>
          <button onClick={handleLogout} className="hover:bg-transparent">
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
            {user?.email ? (
              <Link to="/signUp">
                <button className="btn btn-sm md:btn bg-yellow md:bg-yellow hover:bg-orange-500 text-base-100 md:text-base-100">
                  Register
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm md:btn bg-yellow md:bg-yellow hover:bg-orange-500 text-base-100 md:text-base-100">
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
