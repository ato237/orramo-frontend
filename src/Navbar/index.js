import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  NavLinks,
  NavLinksLogo,
  NavLinksButton,
  MenuBar,
  MenuCross,
} from "./NavbarElements";

const Navbar = () => {
  const [click, isClicked] = useState(false);

  const handleClick = () => {
    isClicked(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarElements>
            <NavLinksLogo>ORRAMO</NavLinksLogo>
          </NavbarElements>
          <NavbarElements>
            <NavLinks>How it works</NavLinks>
          </NavbarElements>
          <NavbarElements>
            <NavLinks>Services</NavLinks>
          </NavbarElements>
          <NavbarElements>
            <NavLinks>Author</NavLinks>
          </NavbarElements>
          <NavbarElements>
            {click ? (
              <MenuCross onClick={handleClick} />
            ) : (
              <MenuBar onClick={handleClick} />
            )}

            <NavLinksButton>Get the App</NavLinksButton>
          </NavbarElements>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
