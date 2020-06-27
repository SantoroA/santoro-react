import React from "react";
import { Route, Switch } from "react-router-dom";
import GraphicDesign from "./GraphicDesign";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className="App container-flex">
      <Home />

      <Switch>
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={GraphicDesign} />
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
