import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap");
`;
