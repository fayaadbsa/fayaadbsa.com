import React, { useState } from "react";
import ExperienceSection from "../../sections/ExperienceSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../../components/InfoSection/Data";
import IntroSection from "../../sections/IntroSection";
import Navbar from "../../components/Navbar";
import ProjectSection from "../../sections/ProjectSection";
import Services from "../../components/Services";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <IntroSection />
      <ProjectSection />
      {/* <ExperienceSection /> */}
      {/* <HeroSection /> */}
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Services /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;
