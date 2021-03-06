import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(13, 17, 27);
`;

export const FooterWrapper = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding-top: 32px;
  } ;
`;

export const FooterImageWrapper = styled.div`
  display: flex;
  /* background: red; */
  /* justify-content: space-between; */
  align-items: center;
  /* max-width: 1100px; */
  margin: 40px auto 0 auto;
  /* justify-content: space-between; */
  /* margin: 40px; */

  /* @media screen and (max-width: 820px) {
    flex-direction: column;
  } */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 375px) {
    /* width: 4px; */
  }
`;

export const FooterImage = styled(Link)`
  /* background: blue; */
  background-size: contain;
  color: #fff;
  justify-self: start;
  cursor: default;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  height: 100%;
  background-repeat: no-repeat;
  flex: 1;

  img {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 52rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 38rem;
  }
  @media screen and (max-width: 375px) {
    max-width: 20rem;
  }
`;

export const FooterP = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #d3001f;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
