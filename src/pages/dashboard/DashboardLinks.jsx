import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";

const DashboardLinks = () => {
  return (
    <>
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
          <BiSolidDashboard />
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
          <BiSolidDashboard />
          My Bookings
        </NavLink>
      </li>
    </>
  );
};

export default DashboardLinks;
