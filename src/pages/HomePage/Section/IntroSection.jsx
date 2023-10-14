import React from "react";
import ProfilePicture from "@/images/fayaad.png";
import Button from "@/components/button/Button";
import { lang } from "@/data/lang";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiExpress } from "react-icons/si";
import Tag from "@/components/tag/Tag";
import Tooltip from "@/components/tooltip/Tooltip";
import { BiLogoPostgresql } from "react-icons/bi";

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
        "gap-16 items-start lg:items-center justify-between",
        "min-h-[60vh] transition-all duration-700",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="flex flex-col">
        <p className="text-5xl sm:text-6xl text-fx-white">
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
        <div className="ml-0 lg:ml-20">
          <div className="text-xl mt-4 text-fx-grey-light">
            {lang.intro.description}
          </div>
          <div className="flex flex-wrap mt-4 gap-2">
            <Tooltip content="ReactJs">
              <Tag rounded>
                <FaReact size={24} />
              </Tag>
            </Tooltip>
            <Tooltip content="VueJs">
              <Tag rounded>
                <FaVuejs size={24} />
              </Tag>
            </Tooltip>
            <Tooltip content="TailwindCSS">
              <Tag rounded>
                <SiTailwindcss size={24} />
              </Tag>
            </Tooltip>
            <Tooltip content="Django">
              <Tag rounded>
                <SiDjango size={24} />
              </Tag>
            </Tooltip>
            <Tooltip content="ExpressJs">
              <Tag rounded>
                <SiExpress size={24} />
              </Tag>
            </Tooltip>
            <Tooltip content="PostgreSQL">
              <Tag rounded>
                <BiLogoPostgresql size={24} />
              </Tag>
            </Tooltip>
          </div>
        </div>

        <div className="mt-10 w-fit">
          <Link to={lang.intro.resume.link} target="_blank">
            <Button>{lang.intro.resume.label}</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[410px] self-center">
        <img
          className="rounded-tl-lg w-full"
          src={ProfilePicture}
          alt={lang.intro.picture.alt}
        />
      </div>
    </div>
  );
};

export default IntroSection;
