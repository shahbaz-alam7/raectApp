import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navb-div">
        <nav className="navbar" id="navbar">
          <div className="navbar-brand">
            <h1>Shahbaz</h1>
          </div>
          <ul>
            <li>
              <NavLink
                className="nav-link active"
                activeClassName="menu_active"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="nav-link active"
                activeClassName="menu_active"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active"
                activeClassName="menu_active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active"
                activeClassName="menu_active"
                to="/contact"
              >
                Contact us
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
