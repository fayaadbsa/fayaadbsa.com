import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElement";

const Mobilebar = (props) => {
  const { handleSidebar, isOpen } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={handleSidebar}>
      <Icon onClick={handleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="intro" onClick={handleSidebar}>
            Intro
          </SidebarLink>
          <SidebarLink to="projects" onClick={handleSidebar}>
            Projects
          </SidebarLink>
          <SidebarLink to="blogs" onClick={handleSidebar}>
            Blogs
          </SidebarLink>
          <SidebarLink to="contact" onClick={handleSidebar}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Mobilebar;
