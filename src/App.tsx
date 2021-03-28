import React from 'react';
import './App.scss';

import Carasouel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Carasouel interval={5000} />
    </div>
  );
}

export default App;
