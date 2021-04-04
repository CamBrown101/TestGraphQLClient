import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import styled from 'styled-components';

type Props = {
  interval: number;
  numberOfSlides: number;
};

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(1);
  console.log(slide);

  const nextSlide = () => {
    if (slide + 1 === numberOfSlides + 1) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide - 1 === 0) {
      setSlide(numberOfSlides);
    } else {
      setSlide(slide - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => clearTimeout(timer);
  });

  const slidesArray = [
    <CarouselSlide
      numberOfSlides={numberOfSlides}
      slide={slide}
      color="pink"
    />,
    <CarouselSlide numberOfSlides={numberOfSlides} slide={slide} color="red" />,
    <CarouselSlide
      numberOfSlides={numberOfSlides}
      slide={slide}
      color="blue"
    />,
    <CarouselSlide
      numberOfSlides={numberOfSlides}
      slide={slide}
      color="green"
    />,
    <CarouselSlide
      numberOfSlides={numberOfSlides}
      slide={slide}
      color="black"
    />,
  ];

  return (
    <CarouselContainer>
      {slidesArray[slide - 1]}

      <Buttons onClick={() => previousSlide()}>last</Buttons>
      <Buttons primary="white" onClick={() => nextSlide()}>
        next
      </Buttons>
    </CarouselContainer>
  );
};

//Styled Components
type ButtonsProps = {
  primary?: string;
};

const Buttons = styled.button<ButtonsProps>`
  color: red;
  background-color: ${(props) =>
    props.primary === 'white' ? 'white' : 'black'};
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

export default Carousel;
