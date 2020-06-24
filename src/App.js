import React from "react";
import { Route, Switch } from "react-router-dom";
import GraphicDesign from "./GraphicDesign";
import AboutMe from "./AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/graphic-design" component={GraphicDesign} />
      </Switch>
    </div>
  );
}

export default App;
