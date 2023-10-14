import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Menu from "./Menu";

const MobileBar = (props) => {
  const { handleSidebar, isOpen } = props;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      onClick={handleSidebar}
      className={`fixed z-50 w-full h-full grid items-center left-0
        ease-in-out duration-300 bg-fx-background
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
        <Menu />
      </div>
    </div>
  );
};

export default MobileBar;
