import React from "react";
import styled from "styled-components";

const WhyHeader = () => {
  return (
    <WhyHeaderContainer>
      <WhyHeaderInnerContainer>
        <h2 className="why">Why</h2>
        <h2 className="acclamation">Acclamation</h2>
      </WhyHeaderInnerContainer>
    </WhyHeaderContainer>
  );
};

export default WhyHeader;

const WhyHeaderContainer = styled.header`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
const WhyHeaderInnerContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: white;
    margin: 0;
    font-weight: 900;
    letter-spacing: 3px;
  }
  .why {
    font-family: "Quentin", sans-serif;
    color: #b09a7f;
    font-size: 42px;
    margin-bottom: -10px;
    margin-top: 50px;
  }
  .acclamation {
    text-transform: uppercase;
    font-size: 38px;
    line-height: 44px;
  }
`;
