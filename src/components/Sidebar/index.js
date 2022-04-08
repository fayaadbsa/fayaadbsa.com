import React from "react";
import { createUseStyles } from "react-jss";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElement";

const useStyles = createUseStyles({
  gradientColor: {
    backgroundColor: "#F98D36",
    backgroundImage: "linear-gradient(45deg, #F98D36, #FBE10F)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-background-clip": "text",
    "-moz-text-fill-color": "transparent",
  },
});

const Sidebar = (props) => {
  const classes = useStyles();

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
          <SidebarLink to="services" onClick={handleSidebar}>
            Services
          </SidebarLink>
          <SidebarLink to="contact" onClick={handleSidebar}>
            Contact
          </SidebarLink>
          <SidebarLink to="signin" onClick={handleSidebar}>
            Sign In
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={handleSidebar}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
