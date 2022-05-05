import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col pb-20" id="contact">
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          Contact Me!
        </span>
      </div>
      <div className="fx-border py-10 px-16 mt-9 rounded-lg ">
        <p>
          I'm always excited to find new creative website projects. If you have
          something you think we can work on together, drop me a message! Im
          available for freelance projects or part-time employment.
          <br />
          <br />
          Feel free to reach me on
          <span className="text-fx-linear-orange-yellow-aqua font-bold ml-2">
            <a href="mailto:fayet256@gmail.com">fayet256@gmail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
