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

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={props.toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="services" onClick={props.toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="contact" onClick={props.toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="signin" onClick={props.toggle}>
            Sign In
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={props.toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
