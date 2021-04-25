import React from "react";
import styled from "styled-components";
import Logo from "../../images/AcclamationLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
        <img className="logo" alt="Acclamation Logo" src={Logo}></img>
      </NavLink>
      <NavLink
        className="nav-menu-item"
        id="nav-menu-why-acclamation"
        exact
        to="/Why-Acclamation">
        How We Work
      </NavLink>
      <NavLink
        className="nav-menu-item"
        id="nav-menu-how-we-work"
        exact
        to="/How-We-Work">
        How We Work
      </NavLink>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 2% 10px;
  background-color: black;
  .logo {
    height: 70px;
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #424242;
    filter: invert(15%) sepia(6%) saturate(1341%) hue-rotate(353deg)
      brightness(83%) contrast(84%);
  }
`;
