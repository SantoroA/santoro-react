import React from "react";
import Title from "./Containers/Title";
import Nav from "./Nav";
export default function Portfolio() {
  return (
    <div className="container">
      <Nav fixedTop={true} />
      <Title>
        <h1>My Portfolio</h1>
      </Title>
    </div>
  );
}
