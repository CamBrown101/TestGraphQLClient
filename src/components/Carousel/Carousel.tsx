import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import styled from 'styled-components';
import { Circle } from '@styled-icons/bootstrap/Circle';
import { CircleFill } from '@styled-icons/bootstrap/CircleFill';

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

  const createCircles = (numberOfSlides: number, slideNumber: number) => {
    const arrayOfCircles: any[] = [];

    for (let i = 1; i <= numberOfSlides; i++) {
      if (i === slideNumber) {
        arrayOfCircles.push(<CircleFill className="circle-fill" key={i} />);
      } else {
        arrayOfCircles.push(<Circle className="circle" key={i} />);
      }
    }
    return arrayOfCircles;
  };

  return (
    <CarouselContainer>
      <p>{slide}</p>
      <CarouselSlide color="pink" />
      <div className="circle-container">
        {createCircles(numberOfSlides, slide)}
      </div>
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

  .circle {
    width: 20px;
  }
  .circle-fill {
    width: 20px;
  }
  .circle-container {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
  }
`;

export default Carousel;