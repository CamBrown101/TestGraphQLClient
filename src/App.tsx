import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./components/LandingPage/LandingPage";
import WhyAcclamation from "./components/WhyAcclamation/WhyAcclamation";
import Mission from "./components/Mission/Mission";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Why-Acclamation" exact component={WhyAcclamation} />
        <Route path="/Mission" exact component={Mission} />
      </Switch>
    </Router>
  );
}

export default App;
