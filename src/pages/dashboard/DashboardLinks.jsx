import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdBookmarkAdded, MdBookmarkAdd } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useIsTourGuide from "../../hooks/useisTourGuide";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const DashboardLinks = () => {
  const { isAdmin } = useAdmin();
  const { isTourGuide } = useIsTourGuide();
  return (
    <>
      {isAdmin?.admin === true ? (
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
              to="/dashboard/addPackage"
            >
              <MdAddCard className="text-lg" />
              Add Package
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
              to="/dashboard/manageUsers"
            >
              <FaUsersCog className="text-lg" />
              Manage Users
            </NavLink>
          </li>
        </>
      ) : isTourGuide.tourGuide === true ? (
        // Tour Guides Links
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
              to="/dashboard/myAssignedTour"
            >
              <BsFillBookmarkPlusFill className="text-lg" />
              My Assigned Tour
            </NavLink>
          </li>
        </>
      ) : (
        // Tourist Links
        <>
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
      )}
    </>
  );
};

export default DashboardLinks;
