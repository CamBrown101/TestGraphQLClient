import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <AboutHeader>
      <AboutContainer>
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
      </AboutContainer>
    </AboutHeader>
  );
};
export default HomePage;

const AboutHeader = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap");

  background-color: black;
  font-family: "Work Sans", sans-serif;
  max-width: 100%;
  width: 100%;
  color: #fff;
  height: 675px;
  padding-top: 69px;
  .about-header {
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 42px;
    line-height: 44px;
  }
  .about-content {
    font-size: 24px;
    line-height: 32px;
    margin-top: 0;
  }
`;
const AboutContainer = styled.div`
  width: 90%;
  margin-left: 2%;
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
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  font-family: "Work Sans", sans-serif;
`;
