import React from "react";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Landing from "./Landing";

import "./App.css";

function App() {
  return (
    <div className="App container-flex">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
