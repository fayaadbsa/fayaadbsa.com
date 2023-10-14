import React from "react";
import { MENUS } from "@/data/menu";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return MENUS.map((item) => (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          "flex items-center justify-center tracking-wider text-lg",
          "ease-in-out text-fx-white cursor-pointer",
          isActive ? "text-fx-yellow text-shadow-neon" : "hover:text-shadow-neon"
        )
      }
    >
      {item.label}
    </NavLink>
  ));
};

export default Menu;
