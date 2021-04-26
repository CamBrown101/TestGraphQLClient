import React from "react";
import styled from "styled-components";

const FromConcept = () => {
  return (
    <FromBrandContainer>
      <FromBrandInnerContainer>
        <Titles>
          <h2 className="title-one">FROM CONCEPT</h2>
          <h2 className="title-two">TO CONSUMER</h2>
        </Titles>
        <h3>
          Our services combined with your exceptional product will build your
          customer base and keep them coming back.
        </h3>
        <ListContainer>
          <Lists>
            <div className="list-titles">
              <img
                src="https://assets.website-files.com/5ece8808610c986cbcec2b27/5f2013fb6e9d964b1d4ca673_Speakeasy_CO-Icon-Online-Store.svg"
                alt="Services"
                className="image"></img>
              <h5>SERVICES</h5>
            </div>
            <li>Website Design and Architecture</li>
            <li>Online Store Setup Business</li>
            <li>
              Strategies Search Engine Optimization and Search Engine Marketing
            </li>
            <li>Strategy Management</li>
            <li>Social Media Campaigns</li>
            <li>Liquor Branding</li>
          </Lists>
          <Lists>
            <div className="list-titles">
              <img
                src="https://assets.website-files.com/5ece8808610c986cbcec2b27/5ece9faf50659013ef0a6f2b_Speakeasy_CO-Icon-Control.svg"
                alt="Tools"
                className="image"></img>
              <h5>Tools</h5>
            </div>
            <li>Fully optimized Shopify Template</li>
            <li>Google Analytics</li>
            <li>Pixels / social media ads</li>
            <li>Retargeting</li>
            <li>Cart abandonment emails</li>
            <li>Content Creation</li>
          </Lists>
        </ListContainer>
        <Button>How We Work</Button>
      </FromBrandInnerContainer>
    </FromBrandContainer>
  );
};

export default FromConcept;

const FromBrandContainer = styled.section`
  /* @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap"); */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #b09a7f;
    font-size: 38px;
    text-align: center;
    margin: 0;
    line-height: 40px;
  }
`;
const FromBrandInnerContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .title-one {
    text-align: right;
    height: 300px;
    font-size: 45px;
  }
  .title-two {
    margin-left: 200px;
    margin-top: 100px;
    font-size: 45px;
  }
`;

const Lists = styled.ul`
  color: #000;
  text-align: center;
  list-style-type: none;
  margin-top: 60px;
  width: 100%;

  h5 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    margin-left: 10px;
  }
  li {
    margin-bottom: 15px;
    padding-top: 7px;
    padding-bottom: 15px;
    border-bottom: 1px solid #2b2f36;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    font-family: Arial, sans-serif;
    border-bottom-color: #dedede;
  }
  .list-titles {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .image {
    height: 50px;
  }
`;
const ListContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-bottom: 20px;
  margin-top: 30px;
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
  width: 200px;
`;
