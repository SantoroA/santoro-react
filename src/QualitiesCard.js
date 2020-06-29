import React from "react";
import useToggle from "./hooks/useToggle";
import "./QualitiesCard.css";

export default function QualitiesCard(props) {
  const [isCardExpanded, toggleIsCardExpanded] = useToggle(false);
  return (
    <div className="QualitiesCard pb-4">
      {isCardExpanded ? (
        <div onMouseLeave={toggleIsCardExpanded} className="card py-2 mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <i className={`fas ${props.icon}`}></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button className="btn m-auto" onMouseEnter={toggleIsCardExpanded}>
          <i className={`fas ${props.icon}`}></i>
        </button>
      )}
    </div>
  );
}
