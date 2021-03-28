import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import styled from 'styled-components';

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
      <Buttons onClick={() => previousSlide()}> last </Buttons>
      <Buttons onClick={() => nextSlide()}> next </Buttons>
    </div>
  );
};

export default Carousel;

const Buttons = styled.button`
  color: red;
  background-color: black;
`;
