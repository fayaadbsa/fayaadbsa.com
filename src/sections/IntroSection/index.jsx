import React from "react";
import ProfilePicture from "../../images/fayaad.png";
import Button from "../../components/Button/Button";

const IntroSection = () => {
  return (
    <div
      className="flex flex-col-reverse items-start lg:items-center justify-between py-32 lg:flex-row"
      id="intro"
    >
      <div className="flex flex-col w-full lg:w-[410px]">
        <p className="text-5xl sm:text-6xl text-fx-white self-center">
          Hi, I'm{" "}
          <span className="font-bold text-fx-linear-orange-yellow-aqua">
            Fayaad
          </span>
        </p>
        <div className="flex mt-12 items-center">
          <div className="border-b border-fx-orange w-14 mr-6" />
          <span className="text-2xl sm:text-3xl font-light text-fx-linear-orange-yellow">
            A Website Enthusiast.
          </span>
        </div>
        <div className="text-lg mt-6 text-fx-grey ml-0 lg:ml-20">
          I also love to play online games 🎮, watch movies 🎥, and travel ⛰
        </div>
        <div className="mt-16">
          <a href="https://ristek.link/Muhammad_Fayaad_CV" target="_blank" rel="noreferrer">
            <Button>Get My Resume</Button>
          </a>
        </div>
      </div>
      <div className="w-full mb-16 lg:mb-0 sm:w-[410px] self-center">
        <img
          className="rounded-tl-lg"
          src={ProfilePicture}
          alt="Fayaad's Face"
        />
      </div>
    </div>
  );
};

export default IntroSection;
