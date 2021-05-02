import React, { useState, useEffect } from "react";
// import People from "./PeopleSlides/PeopleSlide";
// import ShawnSoole from "./PeopleSlides/ShawnSooleSlide";
// import KristoffCoates from "./PeopleSlides/KristoffCoatesSlide";
// import ColinParks from "./PeopleSlides/ColinParksSlide";
import SlideTemplate from "./PeopleSlides/SlideTemplate";
import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

type Props = {
  interval: number;
  numberOfSlides: number;
};

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(0);

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

  const slideData = [
    {
      header: "People",
      description:
        "A partnership between online marketing genius, Kristoff Coates and creative powerhouse, Shawn Soole. With years in online marketing in the legal world, Kristoff brings a unique and strategic position to help the food and drinks industry combining with Shawn’s decades long obsession with creating and building brands here in Canada and overseas. Acclamation is the combination of a tech savvy approach and hospitalitycentric creative direction, making it a unique hospitality focused organization. You've worked hard to create a high-quality product that people will love. Now you need to spread the word about your brand so you can sell more of your products. That's where we come in. We work with you to develop a complete branding and marketing strategy that showcases your liquor to your target audience and increases your sales, enabling your distillery to grow. We connect you with consumers through customized branding, marketing, and website optimization solutions. Our team combines online marketing strategy expertise with superior hospitality marketing and liquor branding development to maximize your distillery’s success and provide opportunities for growth.",
    },
    {
      header: "Kristoff Coates",
      description:
        "Kristoff has been working in online sales and marketing for over 17 years. He has vast experience in analyzing and creating marketing strategies to best fit the needs of each individual business client. Structural analysis, content organization and analytical tracking of visitors have led to high placement in SERPs and Zero click placement for brand building.",
    },
    {
      header: "Colin Parks",
      description:
        "From a very early age, it was clear Colin Parks was destined to be a graphic designer. His earliest commission was a series of drawings for his elementary school’s Christmas production programs, followed shortly by a logo project in middle school, posters for high school productions, and a welcome sign for his hometown; all this before any real training. Since then, Colin has spent half his life as apractising professional with experience as an in-house designer for studios and agencies, in publishing (he can legitimately state he’s designed covers and interiors of approximately one thousand books), and as a freelancer. For him, design is best when clean and clear execution is based on a strong concept, and he has a penchant for mid-20th century aesthetics—a time when authentic ideas reigned over templated Photoshop effects.",
    },
    {
      header: "Shawn Soole",
      description:
        "Shawn has been working in the hospitality industry for over 20 years, he has years of experience helping brands in the food & beverage sphere as well as the drinks industry target and attain their goals through CPG design, product development and social media content creation, strategy and marketing.",
    },
  ];

  const slidesArray = slideData.map((slide, index) => {
    return (
      <SlideTemplate
        key={index}
        numberOfSlides={slideData.length}
        slide={index}
        header={slide.header}
        description={slide.description}
      />
    );
  });

  console.log(slidesArray);
  // const slidesArray = [
  //   <SlideTemplate
  //     slide={1}
  //     numberOfSlides={4}
  //     header={SlideData[0].header}
  //     description={SlideData[0].description}
  //   />,
  //   <SlideTemplate
  //     slide={1}
  //     numberOfSlides={4}
  //     header={SlideData[1].header}
  //     description={SlideData[1].description}
  //   />,
  //   <SlideTemplate
  //     slide={1}
  //     numberOfSlides={4}
  //     header={SlideData[2].header}
  //     description={SlideData[2].description}
  //   />,
  //   <SlideTemplate
  //     slide={1}
  //     numberOfSlides={4}
  //     header={SlideData[3].header}
  //     description={SlideData[3].description}
  //   />,
  // ];

  return (
    <CarouselContainer>
      <CarouselContainerInner>
        {slidesArray[slide]}
        <ButtonContainer>
          <Buttons onClick={() => previousSlide()}>
            <ChevronLeft />
          </Buttons>
          <Buttons primary="white" onClick={() => nextSlide()}>
            <ChevronRight />
          </Buttons>
        </ButtonContainer>
      </CarouselContainerInner>
    </CarouselContainer>
  );
};

// Styled Components
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
