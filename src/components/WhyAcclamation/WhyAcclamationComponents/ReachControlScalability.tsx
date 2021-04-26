import React from "react";
import styled from "styled-components";
import reachIcon from "../../../images/reach-icon.svg";
import controlIcon from "../../../images/control-icon.svg";
import scalabilityIcon from "../../../images/scalability-icon.svg";

const FromConcept = () => {
  return (
    <FromBrandContainer>
      <FromBrandInnerContainer>
        <ListContainer>
          <Lists>
            <div className="list-titles">
              <img src={controlIcon} alt="Control Icon" className="image"></img>
              <h5>CONTROL</h5>
            </div>
            <li>
              Connect with customers directly and tell your brand story online
            </li>
            <li>
              Control the customer journey from discovery, to purchase, to
              presentation
            </li>
            <li>In-depth Monthly Reporting</li>
          </Lists>
          <Lists>
            <div className="list-titles">
              <img src={reachIcon} alt="Reach Icon" className="image"></img>
              <h5>REACH</h5>
            </div>
            <li>
              Reach a larger audience with online marketing and pinpoint
              targeting
            </li>
            <li>
              Enable consumers to order on the spot at events and tasting rooms
              with POS enabled platform
            </li>
            <li>
              Sell more product from your tasting room with the ability to ship
              for your customer
            </li>
          </Lists>

          <Lists>
            <div className="list-titles">
              <img
                src={scalabilityIcon}
                alt="Scalability Icon"
                className="image"></img>
              <h5>SCALABILITY</h5>
            </div>
            <li>Monetize traffic from social media leads</li>
            <li>
              Increase brand awareness and sales through digital advertising
            </li>
            <li>Convert social media followers and newsletter subscribers</li>
          </Lists>
        </ListContainer>
      </FromBrandInnerContainer>
    </FromBrandContainer>
  );
};

export default FromConcept;

const FromBrandContainer = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FromBrandInnerContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Lists = styled.ul`
  color: white;
  text-align: center;
  list-style-type: none;
  margin-top: 60px;
  width: 30%;
  padding: 0;

  h5 {
    font-size: 35px;
    line-height: 20px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: #b09a7f;
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
    font-weight: 900;
  }
  .list-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .image {
    height: 100px;
    margin-bottom: 20px;
  }
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
