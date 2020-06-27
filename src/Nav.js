import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg fixed-bottom ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <NavLink
                activeClassName="Nav-active"
                className="nav-item nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="Nav-active"
                className="nav-item nav-link"
                exact
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="Nav-active"
                className="nav-item nav-link"
                exact
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
