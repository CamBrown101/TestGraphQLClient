import React from 'react';
import styled from 'styled-components';
import { Circle } from '@styled-icons/bootstrap/Circle';
import { CircleFill } from '@styled-icons/bootstrap/CircleFill';

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
      <div className="slideBackground">
        <div className="circle-container">
          <p>{slide}</p>
        </div>
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

export default CarouselSlide;
