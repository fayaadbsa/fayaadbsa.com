import React from "react";
import { lang } from "data/lang";

const ContactSection = () => {
  return (
    <div className="flex flex-col pb-20" id="contact">
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          {lang.contact.title}
        </span>
      </div>
      <div className="fx-border py-10 px-16 mt-9 rounded-lg text-fx-white">
        <p>
          {lang.contact.description.first}
          <br />
          <br />
          {lang.contact.description.second}
          <span className="text-fx-linear-orange-yellow-aqua font-bold ml-2">
            <a href={lang.contact.description.email}>
              {lang.contact.description.third}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
