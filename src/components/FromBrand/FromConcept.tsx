import React from "react";
import styled from "styled-components";

const FromConcept = () => {
  return (
    <FromBrandContainer>
      <Titles>
        <h2>FROM CONCEPT</h2>
        <h2>TO CONSUMER</h2>
      </Titles>
      <h3>
        Our services combined with your exceptional product will build your
        customer base and keep them coming back.
      </h3>
      <h3>SERVICES</h3>
      <ul>
        <li>Website Design and Architecture</li>
        <li>Online Store Setup Business</li>
        <li>
          Strategies Search Engine Optimization and Search Engine Marketing
        </li>
        <li>Strategy Management</li>
        <li>Social Media Campaigns</li>
        <li>Liquor Branding</li>
      </ul>
      <h3>TOOLS</h3>
      <ul>
        <li>Fully optimized Shopify Template</li>
        <li>Google Analytics</li>
        <li>Pixels / social media ads</li>
        <li>Retargeting</li>
        <li>Cart abandonment emails</li>
        <li>Content Creation</li>
      </ul>
    </FromBrandContainer>
  );
};

export default FromConcept;

const FromBrandContainer = styled.section`
  margin: 0;
  width: 100%;
  background-color: #fff;
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
`;
