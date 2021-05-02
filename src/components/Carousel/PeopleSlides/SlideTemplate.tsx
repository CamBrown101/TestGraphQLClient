import React from "react";
import styled from "styled-components";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";

type Props = {
  slide: number;
  numberOfSlides: number;
  header: string;
  description: string;
  title?: string;
};

const createCircles = (totalSlides: number, slideNumber: number) => {
  const arrayOfCircles: any[] = [];

  for (let i = 0; i < totalSlides; i++) {
    if (i === slideNumber) {
      arrayOfCircles.push(<CircleFill className="circle current" key={i} />);
    } else {
      arrayOfCircles.push(<CircleFill className="circle" key={i} />);
    }
  }
  return arrayOfCircles;
};

const People = ({
  slide,
  numberOfSlides,
  header,
  description,
  title,
}: Props) => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <h2>
          {header}
          {title && ` - ${title}`}
        </h2>
        <p>{description}</p>
        <CircleContainer>
          {createCircles(numberOfSlides, slide)}
        </CircleContainer>
      </div>
    </SlideWrapper>
  );
};

//Styled Component

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 100%;
  color: white;
  background-color: black;

  p {
    font-family: "Work Sans", sans-serif;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    margin-bottom: 80px;
  }
  h2 {
    margin: 0;
    margin-top: 80px;
    font-family: "Quentin", sans-serif;
    color: #b09a7f;
    font-size: 52px;
    line-height: 42px;
    text-align: center;
  }
  .slide-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: center;
  margin-bottom: 20px;

  .circle {
    width: 10px;
    color: grey;
    margin-right: 10px;
  }
  .current {
    color: white;
  }
`;
export default People;
