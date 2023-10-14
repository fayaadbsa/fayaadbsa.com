import React from "react";
import { lang } from "@/data/lang";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Button from "@/components/button/Button";
import { BUTTON_VARIANT } from "@/utils/enum";

const ContactSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id={lang.contact.id}
      ref={ref}
      className={clsx(
        "flex flex-col transition-all duration-700 delay-300",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          {lang.contact.title}
        </span>
      </div>
      <div
        className={clsx(
          "fx-border mt-9 rounded-lg",
          "py-6 px-6 text-lg",
          "sm:py-10 sm:px-16 sm:text-2xl",
          "text-fx-grey-light font-medium tracking-[-0.5px]"
        )}
      >
        <span>
          I'm always excited to find new{" "}
          <span className="text-fx-white-sec">creative</span> website projects.
          If you have something you think we can{" "}
          <span className="text-fx-white-sec">work on</span> together, drop me a{" "}
          <span className="text-fx-white-sec">message!</span>
          <br />
          <br />
          Feel free to <span className="text-fx-white-sec">reach</span> me on
          <span className="text-fx-linear-orange-yellow-aqua font-bold ml-2 break-all">
            <Link to={lang.contact.description.link}>
              <Button variant={BUTTON_VARIANT.LINK}>
                {lang.contact.description.email}
              </Button>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ContactSection;
