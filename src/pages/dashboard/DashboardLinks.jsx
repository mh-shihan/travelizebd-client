import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdBookmarkAdded, MdBookmarkAdd } from "react-icons/md";

const DashboardLinks = () => {
  return (
    <>
      {/* Tourist Links */}
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "" : "",
              color: isActive ? "black" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard"
        >
          <BiSolidDashboard />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "" : "",
              color: isActive ? "#F7B801" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/profile"
        >
          <CgProfile className="text-lg" />
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "" : "",
              color: isActive ? "#F7B801" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/myBookings"
        >
          <MdBookmarkAdded className="text-lg" />
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "" : "",
              color: isActive ? "#F7B801" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/wishlist"
        >
          <MdBookmarkAdd className="text-lg" />
          My Wishlist
        </NavLink>
      </li>
    </>
  );
};

export default DashboardLinks;
