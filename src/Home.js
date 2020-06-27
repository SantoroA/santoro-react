import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import pink from "./imgs/pink.mp4";

export default function Home() {
  return (
    <div className="Home">
      <div className="video-containter">
        <video loop autoPlay muted playsInline src={pink}></video>
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
    </div>
  );
}
