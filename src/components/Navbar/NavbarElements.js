import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: #000; */
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  /* height: 80px; */
  margin-top: -115px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: "Varela Round", sans-serif;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  z-index: 1;
  width: 100%;
  margin: 0 24px;
  align-items: center;
  /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* padding-left: 24px; */

  font-weight: bold;
  text-decoration: none;

  img {
    margin: 10px;
    width: 80px;
    height: 80px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    /* margin: 40px; */
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-right: 22px;
  margin: 0;

  :hover {
    color: blue;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  /* &:hover {
    color: blue !important;
  } */
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  /* font-size: 18px; */
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #d3001f;
  }
  &:hover {
    color: #d3001f !important;
  }
`;
