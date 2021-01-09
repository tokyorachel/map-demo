import { NavLink } from "react-router-dom";

import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/instructions">Instructions</NavLink>
        </li>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
