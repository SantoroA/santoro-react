import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export default function Nav() {
  return (
    <div className="Navbar">
      <Navbar>
        <Nav>
          <NavLink className="nav-item nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-item nav-link" to="/">
            Curriculum
          </NavLink>
          <NavLink className="nav-item nav-link" to="design">
            Design
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
