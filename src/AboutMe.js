import React from "react";
import useToggle from "./hooks/useToggle";
import QualitiesCard from "./QualitiesCard";
import Title from "./Containers/Title";
import coder from "./imgs/coder.svg";
import Nav from "./Nav";
import "./About.css";

export default function AboutMe() {
  const [isExpanded, toggleIsExpanded] = useToggle(false);

  return (
    <div className="About container-fluid">
      <Nav fixedTop="true" />
      <div className="container pb-5">
        <Title>
          <h1>About Me</h1>
        </Title>
        <div className="row my-5 pb-1">
          <div className="col-md-6">
            <img src={coder} alt="coder" />
            <div className="description px-5">
              <h2 className="my-4">This is me!</h2>
              {isExpanded ? (
                <p>
                  The day I fell in love with coding changed my whole life. I am
                  an aspiring Front-End React-JS Developer with a Bachelor
                  Degree in Architecture and a Master Degree in structure. I
                  have lived and studied internationally including a year of
                  Architecture in London in 2013, 3 months of Interior Design in
                  Milan, and a specilization in Structure and Foundations in
                  Brazil. I am fluent in Portuguese, English and Italian. <br />{" "}
                  My experience as an architect, professor, and graphic designer
                  have led me to pursuing a career in coding. I recently
                  finished all SheCodes courses (SheCodes Plus and SheCodes
                  React) and am looking for an entry-level career opportunity to
                  expand my coding knowledge while working closely with other
                  designers.{" "}
                  <button className="readMoreLink" onClick={toggleIsExpanded}>
                    Show Less
                  </button>
                </p>
              ) : (
                <p>
                  I am an aspiring Front-End React-JS Developer with a bachelors
                  in Architecture and a master in structure.
                  <button className="readMoreLink" onClick={toggleIsExpanded}>
                    Read More
                  </button>{" "}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6 pb-1">
            <p>
              <small>(hover to see more)</small>
            </p>
            <QualitiesCard
              title="Fast learner"
              text="What takes other people months to learn, takes me weeks"
              icon="fa-book-reader"
            />
            <QualitiesCard
              title="Proactive"
              text="I don't sit back and wait for things to happen, I make them happen"
              icon="fa-running"
            />
            <QualitiesCard
              title="Problem Solver"
              text="I have an aptitude for creative and effective, sometimes out-of-the-box, solutions"
              icon="fa-exclamation-triangle"
            />
            <QualitiesCard
              title="Global Perspective"
              text="Having experienced many different cultures, I can think about a situation as it relates to the rest of the world"
              icon="fa-globe-americas"
            />
          </div>
        </div>
      </div>
      <div className="programs row align-items-center justify-content-center">
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-adobe"></i>
          <p className="icon-description mb-0">AdobeCC</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-html5"></i>
          <p className="icon-description mb-0">HTML</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-css3-alt"></i>
          <p className="icon-description mb-0">CSS</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-js-square"></i>
          <p className="icon-description mb-0">JavaScript</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-bootstrap"></i>
          <p className="icon-description mb-0">Bootstrap</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon fa-github"></i>
          <p className="icon-description mb-0">GitHub</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fas icon fa-laptop-code"></i>
          <p className="icon-description mb-0">Editor</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fas icon fa-server"></i>
          <p className="icon-description mb-0">API</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fas icon fa-network-wired"></i>
          <p className="icon-description mb-0">Netlify</p>
        </div>
        <div className=" col-md-1 col-2 px-2 py-3 ">
          <i class="fab icon  fa-react"></i>
          <p className="icon-description mb-0">React</p>
        </div>
      </div>
    </div>
  );
}
