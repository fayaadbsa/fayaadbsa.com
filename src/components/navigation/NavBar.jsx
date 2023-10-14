import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../logo/Logo";
import Menu from "./Menu";

const NavBar = (props) => {
  const { handleSidebar } = props;

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex sticky items-center justify-between h-16 top-0 -mt-16 px-4 z-30 bg-fx-background">
      <NavLink
        to="/"
        onClick={toggleHome}
        className="flex items-center justify-self-start cursor-pointer"
      >
        <Logo />
      </NavLink>
      <div className="hidden md:flex md:items-center md:text-center md:list-none transition-all gap-12">
        <Menu />
      </div>
      <div>
        <FaBars
          size={30}
          className="cursor-pointer md:hidden text-fx-white"
          onClick={handleSidebar}
        />
      </div>
    </nav>
  );
};

export default NavBar;
