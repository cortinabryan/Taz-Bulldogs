import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About Us</FooterLink>
                <FooterLink to="/signin">FAQs</FooterLink>
                <FooterLink to="/signin">Available Puppies</FooterLink>
                <FooterLink to="/signin">Contact Us</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About Us</FooterLink>
                <FooterLink to="/signin">FAQs</FooterLink>
                <FooterLink to="/signin">Available Puppies</FooterLink>
                <FooterLink to="/signin">Contact Us</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/" onClick={toggleHome}>
                <img src="/images/logo.png" alt="" className="logo" />
              </SocialLogo>
              <WebsiteRights>
                Taz's Bulldog {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
