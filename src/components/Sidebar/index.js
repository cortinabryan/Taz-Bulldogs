import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="Home" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="About" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="Puppies" onClick={toggle}>
              Available Puppies
            </SidebarLink>
            <SidebarLink to="Contact" onClick={toggle}>
              Contact Us
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
