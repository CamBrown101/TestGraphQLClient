import React from "react";
import styled from "styled-components";
import { Circle } from "@styled-icons/bootstrap/Circle";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";

type Props = {
  color: string;
  slide: number;
  numberOfSlides: number;
};

const CarouselSlide = ({ color, slide, numberOfSlides }: Props) => {
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
    <SlideWrapper color={color}>
      <div className="circle-container">
        <CurrentSlide className="current-slide">{slide}</CurrentSlide>
      </div>
      <div className="circle-container">
        {createCircles(numberOfSlides, slide)}
      </div>
    </SlideWrapper>
  );
};

//Styled Component

type SlideProps = {
  color?: string;
};

const SlideWrapper = styled.div<SlideProps>`
  background-color: ${(props) => {
    return props.color;
  }};
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .circle {
    width: 20px;
    color: limegreen;
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

const CurrentSlide = styled.p`
  font-size: 50px;
  margin: 0;
`;

export default CarouselSlide;
