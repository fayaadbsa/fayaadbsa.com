import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { NAVBAR_DATA } from "../../data/NavbarData";

const Mobilebar = (props) => {
  const { handleSidebar, isOpen } = props;

  return (
    <div
      isOpen={isOpen}
      onClick={handleSidebar}
      className={`fixed z-50 w-full h-full grid items-center left-0
        ease-in-out duration-300 bg-fx-black
        ${isOpen ? "opacity-100 top-0" : "opacity-0 -top-full"}`}
    >
      <div
        onClick={handleSidebar}
        className="absolute top-5 right-6 bg-transparent
          cursor-pointer outline-none"
      >
        <FaTimes color="white" size={32} />
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-6 text-center">
        {NAVBAR_DATA.map((item) => {
          return (
            <LinkS
              to={item.to}
              onClick={handleSidebar}
              className="flex items-center content-center justify-center text-2xl ease-in-out
              text-fx-white cursor-pointer"
            >
              {item.label}
            </LinkS>
          );
        })}
      </div>
    </div>
  );
};

export default Mobilebar;
