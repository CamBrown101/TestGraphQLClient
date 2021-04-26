import React from "react";
import styled from "styled-components";
import WhyHeader from "./WhyAcclamationComponents/WhyHeader";
import ReachControlStability from "./WhyAcclamationComponents/ReachControlScalability";
import OurMission from "./WhyAcclamationComponents/OurMission";
import Footer from "../Footer/Footer";

const WhyAcclamation = () => {
  return (
    <WhyAcclamationWrapper>
      <WhyHeader />
      <ReachControlStability />
      <OurMission />
      <Footer />
    </WhyAcclamationWrapper>
  );
};

export default WhyAcclamation;

const WhyAcclamationWrapper = styled.main`
  h1 {
    margin: 0;
  }
`;
