import React from "react";
import Title from "./Containers/Title";
import Nav from "./Nav";
import weatherApp from "./imgs/weatherApp.svg";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className="container Portfolio">
      <Nav fixedTop={true} />
      <Title>
        <h1>My Portfolio</h1>
      </Title>
      <div className="row mt-5">
        <div className="col-md-3 col-6">
          <a
            href="https://suspicious-brattain-a20b89.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="weather-app" src={weatherApp} alt="weather app" />
          </a>
          <h3 className="mt-4">ReactJS Weather App</h3>
        </div>
      </div>
    </div>
  );
}
