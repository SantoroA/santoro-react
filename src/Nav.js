import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav
        className={
          props.fixedTop
            ? "navbar navbar-expand-md fixed-top"
            : "navbar navbar-expand-md fixed-bottom"
        }
      >
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
          <div className="justify-content-left">
            <a
              className="p-2 social-media"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/aline.santoro.7"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              className="p-2 social-media"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aline-santoro-88564a15b/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              className="px-2 social-media"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/line.santoro/"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
