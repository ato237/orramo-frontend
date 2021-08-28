import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialLogo,
  SocialIcons,
  SocialIconLinks,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems></FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Mobile App</FooterLinkTitle>
              <FooterLink to="/signin">Get it Now</FooterLink>
              <FooterLink to="/signin">More Info</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle> Get help </FooterLinkTitle>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Author</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
   
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">ORRAMO</SocialLogo>
            <WebsiteRights>
              ATO © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" arial-label="Facebool">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
