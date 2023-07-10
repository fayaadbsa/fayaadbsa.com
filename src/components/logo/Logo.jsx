import React from "react";
import { lang } from "@/data/lang";

const Logo = () => {
  return (
    <div
      className="font-dancing-script text-4.5xl font-bold 
      text-fx-linear-orange-yellow-aqua"
    >
      {lang.navbar.logo}
    </div>
  );
};

export default Logo;
