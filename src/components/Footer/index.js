import React from "react";
import { lang } from "../../data/lang";
import rubik4 from "../../images/decorations/rubik-4.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-6">
      <div className={`absolute -z-10 left-16 mb-10 opacity-40`}>
        <img src={rubik4} alt="rubik" />
      </div>
      <p className="text-white">
        {lang.footer.developed.label}
        <span className="text-fx-linear-orange-yellow-aqua font-bold text-lg">
          {lang.footer.developed.name}
        </span>
      </p>
      <p className="text-white">
        {lang.footer.designed.label}
        <span className="text-fx-linear-orange-yellow-aqua font-bold text-lg">
          {lang.footer.designed.name}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
