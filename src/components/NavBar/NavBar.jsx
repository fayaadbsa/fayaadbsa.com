import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { NAVBAR_DATA } from "../../data/NavbarData";
import Logo from "../Atomic/Logo/Logo";

const NavBar = (props) => {
  const { handleSidebar } = props;

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex sticky items-center justify-between h-16 top-0 -mt-16 px-4 z-30 bg-fx-black">
      <LinkRouter
        to="/"
        onClick={toggleHome}
        className="flex items-center justify-self-start cursor-pointer"
      >
        <Logo />
      </LinkRouter>
      <div className="hidden md:flex md:items-center md:text-center md:list-none">
        {NAVBAR_DATA.map((item) => (
          <LinkScroll
            to={item.to}
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="!text-fx-yellow fx-neon-active"
            className="flex items-center h-full cursor-pointer 
                text-white tracking-wider px-6 fx-neon-hover"
          >
            {item.label}
          </LinkScroll>
        ))}
      </div>
      <div>
        <FaBars
          size={30}
          className="cursor-pointer md:hidden"
          onClick={handleSidebar}
        />
      </div>
    </nav>
  );
};

export default NavBar;
