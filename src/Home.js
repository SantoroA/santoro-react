import React from "react";
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
          <h1>Hello, I'm Aline Santoro</h1>
          <h2>I'm a front-end ReactJS developer</h2>
        </div>
      </div>
    </div>
  );
}
