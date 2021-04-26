import React from "react";
import TopSection from "./LandingComponents/TopSection/TopSection";
import FromConcept from "./LandingComponents/FromConcept/FromConcept";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <TopSection />
      <FromConcept />
      <Carousel interval={7000} numberOfSlides={4} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  max-width: 100%;
`;

export default LandingPage;
