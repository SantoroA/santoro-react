import React from "react";
import "./Title.css";

export default function Title(props) {
  return (
    <div className="Title mt-5 pt-2 pb-1">
      {props.children}
      <hr className="mt-1 mb-2" />
    </div>
  );
}
