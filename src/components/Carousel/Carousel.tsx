import React, { useState, useEffect } from "react";
import SlideTemplate from "./PeopleSlides/SlideTemplate";
import CarouselButton from "./CarouselButton";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

type Props = {
  interval: number;
  numberOfSlides: number;
};

type Slide = {
  header: string;
  title: string;
  description: string;
};

const slideData = gql`
  {
    slides {
      header
      title
      description
    }
  }
`;

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(0);
  const { loading, error, data } = useQuery(slideData);

  const nextSlide = () => {
    if (slide + 1 === numberOfSlides) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide === 0) {
      setSlide(numberOfSlides - 1);
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const slidesArray = data.slides.map((slide: Slide, index: number) => {
    return (
      <SlideTemplate
        key={index}
        numberOfSlides={data.slides.length}
        slide={index}
        header={slide.header}
        description={slide.description}
        title={slide.title}
      />
    );
  });
  return (
    <CarouselContainer>
      <CarouselContainerInner>
        {slidesArray[slide]}
        <ButtonContainer>
          <CarouselButton direction="previous" onClick={previousSlide} />
          <CarouselButton direction="next" onClick={nextSlide} />
        </ButtonContainer>
      </CarouselContainerInner>
    </CarouselContainer>
  );
};

// Styled Components

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const CarouselContainerInner = styled.div`
  width: 90%;
  max-width: 1400px;
  position: relative;
`;

export default Carousel;
