import React from "react";
import styled from "styled-components";
import backgroundImage from "../../../../images/WebsiteHEader.png";

const computerBottleImg = backgroundImage;

const HomePage = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        <h2 className="about-header">
          THE CONNECTION BETWEEN YOUR F&B BUSINESS AND YOUR IDEAL CUSTOMER
        </h2>
        <p className="about-content">
          From branding and creative to marketing strategy, Acclamation can
          design and initiate your brands vision with your goals in mind.
          Diverse solutions to every hurdle your business encounters, from
          online footprint to social media engagement.
        </p>
        <Button>WHY ACCLAMATION</Button>
      </AboutContainerInner>
    </AboutContainer>
  );
};
export default HomePage;

const AboutContainer = styled.header`
  background-color: black;
  max-width: 100%;
  width: 100%;
  color: #fff;
  height: 675px;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-header {
    width: 50%;
    margin-bottom: 20px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 42px;
    line-height: 44px;
  }
  .about-content {
    width: 50%;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }
`;
const AboutContainerInner = styled.div`
  background-image: url(${computerBottleImg});
  background-repeat: no-repeat;
  background-size: 600px;
  background-position-x: right;
  background-position-y: center;
  width: 90%;
  height: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
  background-color: #b09a7f;
  padding-top: 12px;
  padding: 9px 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  font-family: "Work Sans", sans-serif;
  width: 283px;
`;
