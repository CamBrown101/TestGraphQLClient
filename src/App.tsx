import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import WhyAcclamation from "./components/WhyAcclamation/WhyAcclamation";
import HowWeWork from "./components/HowWeWork/HowWeWork";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Why-Acclamation" exact component={WhyAcclamation} />
        <Route path="/How-We-Work" exact component={HowWeWork} />
      </Switch>
    </Router>
  );
}

export default App;
