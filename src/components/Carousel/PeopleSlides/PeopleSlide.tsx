import React from "react";
import styled from "styled-components";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";
type Props = {
  slide: number;
  numberOfSlides: number;
};

const People = ({ slide, numberOfSlides }: Props) => {
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
        <h2>People</h2>
        <p>
          A partnership between online marketing genius, Kristoff Coates and
          creative powerhouse, Shawn Soole. With years in online marketing in
          the legal world, Kristoff brings a unique and strategic position to
          help the food and drinks industry combining with Shawn’s decades long
          obsession with creating and building brands here in Canada and
          overseas. Acclamation is the combination of a tech savvy approach and
          hospitalitycentric creative direction, making it a unique hospitality
          focused organization. You've worked hard to create a high-quality
          product that people will love. Now you need to spread the word about
          your brand so you can sell more of your products. That's where we come
          in. We work with you to develop a complete branding and marketing
          strategy that showcases your liquor to your target audience and
          increases your sales, enabling your distillery to grow. We connect you
          with consumers through customized branding, marketing, and website
          optimization solutions. Our team combines online marketing strategy
          expertise with superior hospitality marketing and liquor branding
          development to maximize your distillery’s success and provide
          opportunities for growth.
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
export default People;
