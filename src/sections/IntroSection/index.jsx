import React from "react";
import ProfilePicture from "../../images/fayaad.png";
import Button from "../../components/Button/Button";

const IntroSection = () => {
  return (
    <div
      className="flex items-center justify-between mt-36 mb-16"
      id="intro"
    >
      <div className="w-[410px]">
        <p className="text-6xl text-fx-white">
          Hi, I'm{" "}
          <span className="font-bold text-fx-linear-orange-yellow-aqua">
            Fayaad
          </span>
        </p>
        <div className="flex mt-12 items-center">
          <div className="border-b border-fx-orange w-14 mr-6" />
          <span className="text-3xl font-light text-fx-linear-orange-yellow">
            A Website Enthusiast.
          </span>
        </div>
        <div className="text-lg mt-6 text-fx-grey ml-20">
          I also love to play online games 🎮, watch movies 🎥, and travel ⛰
        </div>
        <div className="mt-16">
          <Button>Download CV</Button>
        </div>
      </div>
      <div className="w-[387px]">
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
