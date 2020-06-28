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
      <row>
        <img className="mt-4" src={coder} alt="coder" />
      </row>
    </div>
  );
}
