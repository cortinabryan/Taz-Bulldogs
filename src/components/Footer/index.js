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
                Taz's Bulldog 2017 All rights reserved.
              </WebsiteRights>
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=100069967895767"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/wilwc31/?utm_medium=copy_link&fbclid=IwAR3OSEAg1lqMt1c_uGVehGXeARIq6Rw-MDuzUe9vBqzjAbfGIksSjaiJV9I"
                target="_blank"
                aria-label="Instagram"
              >
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
