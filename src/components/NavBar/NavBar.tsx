import React from "react";
import styled from "styled-components";
import Logo from "../../images/AcclamationLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
          <img className="logo" alt="Acclamation Logo" src={Logo}></img>
        </NavLink>
        <div className="nav-inner-container">
          <div className="nav-btns">
            <NavLink
              className="nav-menu-item"
              id="nav-menu-why-acclamation"
              exact
              to="/Why-Acclamation">
              Why Acclamation
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="nav-menu-how-we-work"
              exact
              to="/How-We-Work">
              How We Work
            </NavLink>
          </div>
          <NavLink
            className="nav-menu-item"
            id="nav-menu-evolve-with-us"
            exact
            to="https://forms.gle/ZaZhfMSeV9QxgnNcA">
            Evolve With Us
          </NavLink>
        </div>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  top: 0;
  position: fixed;
`;

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 15px 2% 10px;
  background-color: black;
  border-bottom: 1px solid #463c30;
  color: white;
  width: 90%;

  .logo {
    height: 70px;
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #424242;
    filter: invert(15%) sepia(6%) saturate(1341%) hue-rotate(353deg)
      brightness(83%) contrast(84%);
  }
  .nav-btns {
    margin-top: 15px;
  }
  .nav-inner-container {
    width: 100%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
    transition: color 0.8s;
  }
  a:hover {
    color: #b09a7f;
  }
  #nav-menu-why-acclamation,
  #nav-menu-how-we-work,
  #nav-menu-evolve-with-us {
    margin-right: 25px;
    font-family: "Work Sans", sans-serif;
    font-weight: 900;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  #nav-menu-evolve-with-us {
    margin-top: 15px;
    color: #b09a7f;
    transition: color 0.8s;
  }
  #nav-menu-evolve-with-us:hover {
    color: white;
  }
`;
