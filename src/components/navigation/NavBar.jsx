import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NAVBAR_DATA } from "@/data/NavbarData";
import Logo from "../logo/Logo";
import clsx from "clsx";

const NavMenu = () => {
  return (
    <div className="hidden md:flex md:items-center md:text-center md:list-none transition-all">
      {NAVBAR_DATA.map((item) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            clsx(
              "flex items-center h-full cursor-pointer tracking-wider px-6",
              isActive
                ? "text-fx-yellow fx-neon-active"
                : "text-white fx-neon-hover"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

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
      <NavMenu />
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
