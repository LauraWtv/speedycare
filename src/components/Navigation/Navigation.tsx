import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/expertise">Expertise</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navigation;
