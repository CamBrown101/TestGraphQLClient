import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <AboutHeader>
      <h2 className="about-header">
        {/* THE CONNECTION BETWEEN YOUR F&B BUSINESS AND YOUR IDEAL CUSTOMER */}
        INTEGRATED DTC SOLUTION FOR BEVERAGE ALCOHOL BRANDS
      </h2>
      <p className="about-content">
        From branding and creative to marketing strategy, Acclamation can design
        and initiate your brands vision with your goals in mind. Diverse
        solutions to every hurdle your business encounters, from online
        footprint to social media engagement.
      </p>
    </AboutHeader>
  );
};
export default HomePage;

const AboutHeader = styled.section`
  background-color: black;
  width: 100%;
  color: #fff;
  .about-header {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: "Nimbus Bold", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 38px;
    line-height: 44px;
  }
`;
