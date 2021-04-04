import React from 'react';
import './App.scss';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Carousel} />
      </Switch>
    </Router>
  );
}

export default App;
