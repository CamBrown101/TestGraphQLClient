import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {
  interval: number;
  numberOfSlides: number;
  backgroundColor: string;
};

const Carousel = ({ interval, numberOfSlides, backgroundColor }: Props) => {
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
    <Wrapper>
      <p>{slide}</p>
      <FontAwesomeIcon className="circle" icon={faCircle} />

      <Buttons onClick={() => previousSlide()}>last</Buttons>
      <Buttons primary="white" onClick={() => nextSlide()}>
        next
      </Buttons>
    </Wrapper>
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
const Wrapper = styled.div`
  .circle {
    color: red;
    font-size: 200px;
  }
`;
// const CarouselContainer = styled.div`
//   background-color: ${backgroundColor};
// `;

export default Carousel;
