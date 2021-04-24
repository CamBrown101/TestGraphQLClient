import React, { useState, useEffect } from "react";
import CarouselSlide from "./CarouselSlide";
import People from "./PeopleSlides/PeopleSlide";
import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

type Props = {
  interval: number;
  numberOfSlides: number;
};

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(1);

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
    <People numberOfSlides={numberOfSlides} slide={slide} />,
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
      <ButtonContainer>
        <Buttons onClick={() => previousSlide()}>
          <ChevronLeft />
        </Buttons>
        <Buttons primary="white" onClick={() => nextSlide()}>
          <ChevronRight />
        </Buttons>
      </ButtonContainer>
    </CarouselContainer>
  );
};

//Styled Components
type ButtonsProps = {
  primary?: string;
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
`;

const Buttons = styled.button<ButtonsProps>`
  color: white;
  border: none;
  width: 80px;
  padding: 0;
  background-color: rgba(1, 1, 1, 0);
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

export default Carousel;
