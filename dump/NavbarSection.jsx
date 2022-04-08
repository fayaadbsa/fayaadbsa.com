import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAVSTATE = {
  Intro: "Intro",
  Project: "Project",
  Contact: "Contact",
};

const NavbarSection = (props) => {
  const [selectedNav, setSelectedNav] = useState(NAVSTATE.Intro);

  const changeSelectedNav = (selected) => {
    setSelectedNav(selected);
  };

  const pillStyle = (pill) => {
    return selectedNav === pill
      ? "inline-block py-1 px-3 text-custom-orange"
      : "inline-block py-1 px-3 text-white";
  };

  return (
    <ul class="flex">
      <li class="mx-3">
        <Link
          class={pillStyle(NAVSTATE.Intro)}
          to="/"
          onClick={() => changeSelectedNav(NAVSTATE.Intro)}
        >
          Intro
        </Link>
      </li>
      -
      <li class="mx-3" on>
        <Link
          class={pillStyle(NAVSTATE.Project)}
          to="/"
          onClick={() => changeSelectedNav(NAVSTATE.Project)}
        >
          Project
        </Link>
      </li>
      -
      <li class="mx-3">
        <Link
          class={pillStyle(NAVSTATE.Contact)}
          to="/"
          onClick={() => changeSelectedNav(NAVSTATE.Contact)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
export default NavbarSection;
