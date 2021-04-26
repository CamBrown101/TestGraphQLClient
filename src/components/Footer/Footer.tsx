import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../images/AcclamationLogo.png";

const date = new Date();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TopFooterContainer>
          <div className="contact">
            <img className="logo" alt="Acclamation Logo" src={Logo} />
            <h3>Please drink responsibly</h3>
            <p>Acclamation Co.</p>
            <a className="email" href="mailto:email@Acclamation.com">
              email@Acclamation.com
            </a>
            <a className="phone" href="tel:+1-250-884-3116">
              Phone Number - 250 884 3116
            </a>
            <p className="copyright">
              ©{date.getFullYear()} Acclamation Co. All Rights Reserved.
            </p>
          </div>
          <div className="site-links">
            <Link to="/Why-Acclamation">WHY ACCLAMATION</Link>
            <Link to="/How-We-Work">HOW WE WORK</Link>
          </div>
          <div className="contact-us">
            <h4>CONTACT US</h4>
            <a href="https://forms.gle/ZaZhfMSeV9QxgnNcA">EVOLVE WITH US</a>
            <Link to="/Privacy-Policy">Privacy Policy</Link>
          </div>
        </TopFooterContainer>
        <SocialContainer>
          <div className="social-links">
            <SocialIcons>{/* <a></a> */}</SocialIcons>
            <SocialIcons>{/* <a></a> */}</SocialIcons>
            <SocialIcons>{/* <a></a> */}</SocialIcons>
            <SocialIcons>{/* <a></a> */}</SocialIcons>
          </div>
        </SocialContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  width: 90%;
  max-width: 1400px;
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  .logo {
    height: 75px;
    filter: invert(15%) sepia(6%) saturate(1341%) hue-rotate(353deg)
      brightness(83%) contrast(84%);
  }
`;
const SocialContainer = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #272727;
  text-align: left;
  .social-links {
    display: flex;
    margin-left: 2%;
  }
`;

const SocialIcons = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const TopFooterContainer = styled.div`
  background: black;
  padding-top: 50px;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;

  .contact {
    display: flex;
    flex-direction: column;
    h3 {
      font-family: "Quentin", sans-serif;
      font-size: 25px;
      margin: 3px;
      color: white;
    }
    p {
      font-family: "Work Sans", sans-serif;
      margin: 2px;
    }
    .copyright {
      margin-top: 21px;
      color: #93969b;
      font-size: 13px;
    }
    .email,
    .phone {
      font-size: 13px;
    }
    .email {
      color: #b09a7f;
    }
  }

  .site-links,
  .contact-us {
    display: flex;
    flex-direction: column;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    color: #b09a7f;
    font-weight: 900;
    margin-top: 90px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .site-links {
    text-align: center;
  }
  .contact-us {
    text-align: right;
    margin-right: 2%;
    h4 {
      margin: 0;
    }
    a {
      color: white;
    }
  }
`;
