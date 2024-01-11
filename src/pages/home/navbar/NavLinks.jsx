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
              color: isActive ? "#F7B801" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
