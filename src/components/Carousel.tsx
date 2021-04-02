import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Circle } from '@styled-icons/bootstrap/Circle';
import { CircleFill } from '@styled-icons/bootstrap/CircleFill';

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
    <CarouselContainer>
      <p>{slide}</p>
      <div className="circle-container">
        <Circle className="circle" />
        <CircleFill className="circle-fill" />
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
