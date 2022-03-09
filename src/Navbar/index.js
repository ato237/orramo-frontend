import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  NavLinksLogo,
  NavLinksButton,
  MobileIcon,
  LogoWrapper,
  Image,
  Pop,
  NavLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import Icon from "../Images/adaptive-icon.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarElements>
            <NavLinksLogo to="/">
              <LogoWrapper>
                <Image src={Icon} alt="logo" />
                <Pop>ORRAMO</Pop>
              </LogoWrapper>
            </NavLinksLogo>
          </NavbarElements>

          <NavbarElements>
            <NavLink to="/">Charges Calculator</NavLink>
          </NavbarElements>

          <NavbarElements>
            {" "}
            <NavLink to="converter">Currency Converter</NavLink>
          </NavbarElements>
          <NavbarElements>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavLinksButton to="download">Get the App</NavLinksButton>
          </NavbarElements>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
