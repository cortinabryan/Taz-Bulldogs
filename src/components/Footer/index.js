import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterP,
  FooterImage,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElement";
import logo from "../../images/logo.png";
import img1 from "../../images/american-kennel7.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterImage>
              <img src={img1} alt="" className="kennel1" />
              <FooterP>Registration Papers Included</FooterP>
              <FooterP>30 Day Pet Insurance Coverage</FooterP>
            </FooterImage>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/" onClick={toggleHome}>
                <img src={logo} alt="" className="logo" />
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
