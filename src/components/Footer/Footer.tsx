import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialContainer>
        <div className="social-links">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>
      </SocialContainer>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #000;
`;
const SocialContainer = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #272727;
  text-align: left;
`;
