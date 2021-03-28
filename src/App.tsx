import React from 'react';
import './App.scss';

import Carasouel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carasouel interval={5000} numberOfSlides={5} />
    </div>
  );
}

export default App;
