import React from "react";
import { Link } from "react-router-dom";
import white from "./imgs/white.mp4";
import Nav from "./Nav";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="video-containter">
        <video loop autoPlay muted playsInline src={white}></video>
      </div>
      <div className="text px-4">
        <div className="flex-column">
          <h1>
            Hello, I'm <span className="highlight">Aline Santoro</span>
          </h1>
          <h2>I'm a front-end ReactJS developer</h2>
          <Link className="btn" exact to="/portfolio">
            View my work
          </Link>
        </div>
      </div>
      <Nav fixedTop={false} />
    </div>
  );
}
