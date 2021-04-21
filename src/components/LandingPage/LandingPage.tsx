import React from "react";
import TopSection from "../TopSection/TopSection";
import FromConcept from "../FromConcept/FromConcept";
import Carousel from "../Carousel/Carousel";

const LandingPage = () => {
  return (
    <div>
      <TopSection />
      <FromConcept />
      <Carousel interval={2000} numberOfSlides={4} />
    </div>
  );
};

export default LandingPage;
