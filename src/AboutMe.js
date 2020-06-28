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
          <p className="description px-2">
            I'm an aspiring Front-End React-JS Developer. I may not have a lot
            of experience in coding, but I do have tons of experience in the
            real world. I've worked as an architect, as a Professor, as a
            freelance graphic designer... I also have a specialization and a
            masters degree in structure... However, I gave it all up when I fell
            in love with coding! Recently finished all SheCodes courses
            (SheCodes Plus and SheCodes React) and am looking for an opportunity
            to expand my coding knowledge while working closely with designers.
          </p>
        </div>
        <div className="col-md-6">
          <p>Qualifications: in construction</p>
        </div>
      </div>
    </div>
  );
}
