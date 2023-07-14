import React from "react";
import ProfilePicture from "@/images/fayaad.png";
import Button from "@/components/button/Button";
import { lang } from "@/data/lang";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const IntroSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id={lang.intro.id}
      ref={ref}
      className={clsx(
        "flex flex-col-reverse lg:flex-row",
        "items-start lg:items-center justify-between",
        "min-h-[60vh] transition-all duration-700",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="flex flex-col w-full lg:w-[430px]">
        <p className="text-5xl sm:text-6xl text-fx-white self-center">
          {lang.intro.title.greet}
          <span className="font-bold text-fx-linear-orange-yellow-aqua">
            {lang.intro.title.name}
          </span>
        </p>
        <div className="flex mt-12 items-center">
          <div className="border-b border-fx-orange w-14 mr-6" />
          <span className="text-2xl sm:text-3xl font-light text-fx-linear-orange-yellow">
            {lang.intro.subtitle}
          </span>
        </div>
        <div className="text-xl mt-6 text-fx-grey-light ml-0 lg:ml-20">
          {lang.intro.description}
        </div>
        <div className="mt-16">
          <Link to={lang.intro.resume.link} target="_blank">
            <Button>{lang.intro.resume.label}</Button>
          </Link>
        </div>
      </div>
      <div className="w-full mb-16 lg:mb-0 sm:w-[410px] self-center">
        <img
          className="rounded-tl-lg"
          src={ProfilePicture}
          alt={lang.intro.picture.alt}
        />
      </div>
    </div>
  );
};

export default IntroSection;
