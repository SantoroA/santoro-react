import React from "react";
import Title from "./Containers/Title";
import Nav from "./Nav";
import weatherApp from "./imgs/weatherApp.svg";
import colorApp from "./imgs/colorApp.svg";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className="container Portfolio">
      <Nav fixedTop={true} />
      <Title>
        <h1>My Portfolio</h1>
      </Title>
      <div className="row mt-5 align-items-end justify-content-around">
        <div className="col-md-3 col-6 ">
          <a
            href="https://cloudgevity.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="app-illustration"
              src={weatherApp}
              alt="weather app"
            />
            <h3 className="mt-4 ">ReactJS Weather App</h3>
          </a>
        </div>

        <div className="col-md-3 col-6 ">
          <a
            href="https://colorhabit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="app-illustration" src={colorApp} alt="color app" />
            <h3 className="mt-4 ">ReactJS Palette Creator</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
