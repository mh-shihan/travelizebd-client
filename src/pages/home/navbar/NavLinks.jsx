import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#F7B801" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#F7B801" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/community"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#F7B801" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#F7B801" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#F7B801" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
