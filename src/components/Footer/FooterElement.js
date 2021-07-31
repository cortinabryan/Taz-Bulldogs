import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(13, 17, 27);
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
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
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

export const FooterImage = styled(Link)`
  /* background: blue; */
  color: #fff;
  justify-self: start;
  /* cursor: pointer; */
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    max-width: 52rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 38rem;
  }
  @media screen and (max-width: 375px) {
    max-width: 20rem;
  } ;
`;

export const FooterP = styled.p`
  /* color: #d3001f; */
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 16px;
`;

// export const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 16px;
//   text-align: left;
//   width: 160px;
//   box-sizing: border-box;
//   color: #fff;

//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// export const FooterLinkTitle = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
// `;

// export const FooterLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 14px;

//   &:hover {
//     color: #d3001f;
//     transition: 0.3s ease-out;
//   }
// `;

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
