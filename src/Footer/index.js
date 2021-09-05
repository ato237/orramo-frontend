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
              <FooterLink to="/download">Get it Now</FooterLink>
              <FooterLink to="/download">More Info</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle> Get help </FooterLinkTitle>
              <FooterLink to="/download">Support</FooterLink>
              <FooterLink to="/download">Contact</FooterLink>
              <FooterLink to="/download">Author</FooterLink>
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
              <SocialIconLinks href="https://www.facebook.com/tonybradl" arial-label="Facebool">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="https://www.instagram.com/ato.production/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="https://www.youtube.com/channel/UCOjMQWMEOU8YHbFGBa6Kcxw" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="https://twitter.com/AtoBradley" target="_blank" arial-label="Twitter">
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
