import React from "react";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className="App container-flex">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
