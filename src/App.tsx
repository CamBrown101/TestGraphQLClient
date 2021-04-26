import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import WhyAcclamation from "./components/WhyAcclamation/WhyAcclamation";
import HowWeWork from "./components/LandingPage/LandingComponents/HowWeWork/HowWeWork";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Why-Acclamation" exact component={WhyAcclamation} />
        <Route path="/How-We-Work" exact component={HowWeWork} />
        <Route path="/Privacy-Policy" exact component={PrivacyPolicy} />
      </Switch>
      <NavBar />
    </Router>
  );
}

export default App;
