import React from "react";
import { lang } from "@/data/lang";
import rubik4 from "@/images/decorations/rubik-4.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-12">
      <div className={`absolute -z-10 left-16 mb-20 opacity-40`}>
        <img src={rubik4} alt="rubik" />
      </div>
      <p className="text-fx-white">{lang.footer.developed.label}</p>
    </footer>
  );
};

export default Footer;
