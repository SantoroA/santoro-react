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
      <div className="container">
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
          <div className="col-md-6">
            <p>
              <small>(hover to see more)</small>
            </p>
            <QualitiesCard
              title="Fast learner"
              text="What takes other people months to learn, takes me weeks."
              icon="fa-book-reader"
            />
            <QualitiesCard
              title="Proactive"
              text="I don't sit back and wait for things to happen, I make them happen"
              icon="fa-running"
            />
          </div>
        </div>
      </div>
      <div className="programs d-flex align-items-center justify-content-center">
        <div className="flex-column px-4 ">
          <i class="fab icon fa-html5"></i>
          <p className="icon-description">HTML</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fab icon fa-css3-alt"></i>
          <p className="icon-description">CSS</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fab icon fa-js-square"></i>
          <p className="icon-description">JavaScript</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fab icon fa-bootstrap"></i>
          <p className="icon-description">Bootstrap</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fab icon fa-github"></i>
          <p className="icon-description">GitHub</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fas icon fa-laptop-code"></i>
          <p className="icon-description">Editor</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fas icon fa-server"></i>
          <p className="icon-description">API</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fas icon fa-network-wired"></i>
          <p className="icon-description">Netlify</p>
        </div>
        <div className="flex-column px-4 ">
          <i class="fab icon  fa-react"></i>
          <p className="icon-description">React</p>
        </div>
      </div>
    </div>
  );
}
