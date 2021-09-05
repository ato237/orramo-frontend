import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  NavLinks,
  NavLinksLogo,
  NavLinksButton,
  MobileIcon,
  LogoWrapper,Image,Pop
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import Icon from "../Images/logoora.png";

const Navbar = ({ toggle }) => {
 

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarElements>
            <NavLinksLogo to="/">
              <LogoWrapper >
                <Image
                  src={Icon}
                  alt="logo"
                />
               <Pop>ORRAMO</Pop> 
              </LogoWrapper>
            </NavLinksLogo>
          </NavbarElements>
          <NavbarElements>
            <NavLinks
              spy={true}
              smooth={true}
              offset={180}
              duration={500}
              to="service"
            >
              Services
            </NavLinks>
          </NavbarElements>
          <NavbarElements>
            <NavLinks
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="download"
            >
              Download
            </NavLinks>
          </NavbarElements>
          <NavbarElements></NavbarElements>
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
