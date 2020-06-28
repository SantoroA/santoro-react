import React from "react";
import Title from "./Containers/Title";
import coder from "./imgs/coder.svg";
import Nav from "./Nav";
import "./About.css";
export default function AboutMe() {
  return (
    <div className="About container">
      <Nav fixedTop="true" />

      <Title>
        <h1>About Me</h1>
      </Title>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={coder} alt="coder" />
          <p className="description">
            I'm an aspiring Front-End React-JS Developer.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Qualifications go here</h3>
        </div>
      </div>
    </div>
  );
}
