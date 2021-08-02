import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterImageWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterP,
  FooterImage,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElement";
import logo from "../../images/logo.png";
import img1 from "../../images/american-kennel4.png";
import img2 from "../../images/american-kennel6.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterImageWrapper>
              <FooterImage style={{ backgroundImage: `url(${img1})` }}>
                <img src={img1} alt="" className="kennel" />
                <FooterP>Registration Papers Included</FooterP>
              </FooterImage>
              <FooterImage style={{ backgroundImage: `url(${img2})` }}>
                <img src={img2} alt="" className="kennel" />
                <FooterP>30 Day Pet Insurance Coverage</FooterP>
              </FooterImage>
            </FooterImageWrapper>
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
