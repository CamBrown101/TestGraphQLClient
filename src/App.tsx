import React from "react";
import "./App.scss";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Carousel interval={3000} numberOfSlides={5} />}
          />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap");
`;
