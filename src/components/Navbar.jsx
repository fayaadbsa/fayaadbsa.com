import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

const NAVBAR_ITEMS = [
  { label: "Intro", to: "intro" },
  { label: "Projects", to: "projects" },
  { label: "Blogs", to: "blogs" },
  { label: "Contact", to: "contact" },
];

const Navbar = (props) => {
  const { handleSidebar } = props;

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex sticky items-center justify-between h-16 top-0 -mt-16 mx-4 z-10 bg-fx-black">
      <LinkRouter
        to="/"
        onClick={toggleHome}
        className="flex items-center justify-self-start cursor-pointer"
      >
        <Logo />
      </LinkRouter>
      <div className="hidden md:flex md:items-center md:text-center md:list-none">
        {NAVBAR_ITEMS.map((item) => (
          <LinkScroll
            to={item.to}
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="!text-fx-yellow"
            className="flex items-center h-full cursor-pointer 
                text-white tracking-wider px-6"
          >
            {item.label}
          </LinkScroll>
        ))}
      </div>
      <div>
        <MobileBtn handleSidebar={handleSidebar} />
      </div>
    </nav>
  );
};

const MobileBtn = (props) => {
  const { handleSidebar } = props;

  return (
    <div className="cursor-pointer md:hidden" onClick={handleSidebar}>
      <FaBars size={30} className="text-fx-yellow" />
    </div>
  );
};

const Logo = () => {
  return (
    <div
      className="font-dancing-script text-4.5xl font-bold 
      text-fx-linear-orange-yellow-aqua"
    >
      Fx
    </div>
  );
};

export default Navbar;
