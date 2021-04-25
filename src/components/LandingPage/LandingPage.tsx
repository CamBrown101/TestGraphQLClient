import React from "react";
import TopSection from "../TopSection/TopSection";
import FromConcept from "../FromConcept/FromConcept";
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
  margin-top: 70px;
`;

export default LandingPage;
