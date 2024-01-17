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
          to="/allPackages"
        >
          Our Packages
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
          to="/about"
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
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
