import React from "react";
import styled from "styled-components";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";
type Props = {
  slide: number;
  numberOfSlides: number;
};

const ShawnSoole = ({ slide, numberOfSlides }: Props) => {
  const createCircles = (numberOfSlides: number, slideNumber: number) => {
    const arrayOfCircles: any[] = [];

    for (let i = 1; i <= numberOfSlides; i++) {
      if (i === slideNumber) {
        arrayOfCircles.push(<CircleFill className="circle-current" key={i} />);
      } else {
        arrayOfCircles.push(<CircleFill className="circle" key={i} />);
      }
    }
    return arrayOfCircles;
  };

  return (
    <SlideWrapper>
      <div className="people-container">
        <h2>Shawn Soole - Creative Director</h2>
        <p>
          Shawn has been working in the hospitality industry for over 20 years,
          he has years of experience helping brands in the food & beverage
          sphere as well as the drinks industry target and attain their goals
          through CPG design, product development and social media content
          creation, strategy and marketing.
        </p>
        <CircleContainer>
          {createCircles(numberOfSlides, slide)}
        </CircleContainer>
      </div>
    </SlideWrapper>
  );
};

//Styled Component

type SlideProps = {
  color?: string;
};

const SlideWrapper = styled.div<SlideProps>`
  background-color: black;
  color: white;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center p {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 80px;
    font-family: "Work Sans", sans-serif;
  }
  h2 {
    margin: 0;
    margin-top: 80px;
    font-family: "Quentin", sans-serif;
    color: #b09a7f;
    font-size: 42px;
    line-height: 42px;
    text-align: center;
  }
  .people-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const CircleContainer = styled.div`
  display: flex;
  flex-direction: initial;
  margin-bottom: 20px;
  justify-content: center;
  .circle {
    width: 10px;
    color: grey;
    margin-right: 10px;
  }
  .circle-current {
    width: 10px;
    color: white;
    margin-right: 10px;
  }
`;
export default ShawnSoole;
