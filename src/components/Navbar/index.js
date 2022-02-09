import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { createUseStyles } from "react-jss";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElements";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElement";
import { Link as LinkR } from "react-router-dom";

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

const Navbar = (props) => {
  const classes = useStyles();

  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 0) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#F98D36" }}> */}
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={toggleHome}
            className={classes.gradientColor}
          >
            F
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="intro"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Intro
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <LinkR to="/signin">
              <Button>Sign In</Button>
            </LinkR>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
