import React from "react";
import styled from "styled-components";

const OurMission = () => {
  return (
    <OurMissionContainer>
      <OurMissionInnerContainer>
        <Title>
          <h2 className="our-mission">Our Mission</h2>
          <h2 className="about-acclamation">About Acclamation</h2>
        </Title>
        <ArticleContainer>
          <article>
            <h5>Why</h5>
            <p>
              We empower brands to understand and control their growth, their
              marketing and how dollar for dollar is utilised
            </p>
          </article>
          <article>
            <h5>What</h5>
            <p>
              Acclamation Marketing and Media is a digital organization
              specializing in your online presence through perfecting your
              digital footprint across multiple platforms
            </p>
          </article>
          <article>
            <h5>How</h5>
            <p>
              Creating a truly unique and efficient platform and strategy to
              connect with your clients from social media to search engines
            </p>
          </article>
        </ArticleContainer>
        <a href="https://forms.gle/ZaZhfMSeV9QxgnNcA">
          <Button>EVOLVE WITH US</Button>
        </a>
      </OurMissionInnerContainer>
    </OurMissionContainer>
  );
};

export default OurMission;

const OurMissionContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
const OurMissionInnerContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    margin: 0;
    font-weight: 900;
  }
  .our-mission {
    font-size: 42px;
    margin-top: 100px;
    color: #b09a7f;
    font-family: "Quentin", sans-serif;
  }
  .about-acclamation {
    margin-bottom: 80px;
    font-size: 42px;
    text-transform: uppercase;
  }
`;
const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  article {
    width: 25%;
  }
  h5 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    margin-left: 10px;
    color: #b09a7f;
  }
  p {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: black;
    font-weight: 700;
  }
`;

const Button = styled.button`
  margin-bottom: 20px;
  margin-top: 50px;
  font-size: 20px;
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
  width: 220px;
`;
