import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  NavLinks,
  NavLinksLogo,
  NavLinksButton,
  MobileIcon,
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
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  style={{
                    width: "80px",
                    padding: "-50px",
                    position: "relative",
                    bottom: "30px",
                    left:"10px"
                  }}
                  src={Icon}
                  alt="logo"
                />
                ORRAMO
              </div>
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
