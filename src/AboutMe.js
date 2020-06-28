import React, { useState } from "react";
import Title from "./Containers/Title";
import coder from "./imgs/coder.svg";
import Nav from "./Nav";
import "./About.css";
export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="About container">
      <Nav fixedTop="true" />

      <Title>
        <h1>About Me</h1>
      </Title>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={coder} alt="coder" />
          <div className="description px-5">
            <h2 className="my-4">This is me!</h2>
            {isExpanded ? (
              <p>
                The day I fell in love with coding changed my whole life. I am
                an aspiring Front-End React-JS Developer with a Bachelor Degree
                in Architecture and a Master Degree in structure. I have lived
                and studied internationally including a year of Architecture in
                London in 2013, 3 months of Interior Design in Milan, and a
                specilization in Structure and Foundations in Brazil. I am
                fluent in Portuguese, English and Italian. <br /> My experience
                as an architect, professor, and graphic designer have led me to
                pursuing a career in coding. I recently finished all SheCodes
                courses (SheCodes Plus and SheCodes React) and am looking for an
                entry-level career opportunity to expand my coding knowledge
                while working closely with other designers.{" "}
                <button
                  className="readMoreLink"
                  onClick={() => setIsExpanded(false)}
                >
                  Collapse
                </button>
              </p>
            ) : (
              <p>
                I am an aspiring Front-End React-JS Developer with a bachelors
                in Architecture and a master in structure.
                <button
                  className="readMoreLink"
                  onClick={() => setIsExpanded(true)}
                >
                  Read More
                </button>{" "}
              </p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <p>Qualifications: in construction</p>
        </div>
      </div>
    </div>
  );
}
