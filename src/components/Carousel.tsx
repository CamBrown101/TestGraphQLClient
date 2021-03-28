import React, { useState, useEffect } from 'react';
import './Carousel.scss';

type Props = {
  interval: number;
  numberOfSlides: number;
};

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(0);
  console.log(slide);

  const nextSlide = () => {
    if (slide + 1 === numberOfSlides) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    setSlide(slide - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => clearTimeout(timer);
  });

  return (
    <div className="carasouel-container">
      <p>{slide}</p>
      <button onClick={() => previousSlide()}> last </button>
      <button onClick={() => nextSlide()}> next </button>
    </div>
  );
};

export default Carousel;
