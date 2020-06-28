import React from "react";
import Title from "./Containers/Title";

import Nav from "./Nav";
import "./About.css";
export default function AboutMe() {
  return (
    <div className="About container-flex">
      <Nav fixedTop="true" />

      <Title>
        <h1>About Me</h1>
      </Title>
    </div>
  );
}
