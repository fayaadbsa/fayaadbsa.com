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
import BlogSection from "../../sections/BlogSection/BlogSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-8xl mx-auto px-16 xl:px-32">
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <IntroSection />
      <ProjectsSection />
      {/* <ProjectSection /> */}
      <BlogSection />
      <ExperienceSection />
      {/* <HeroSection /> */}
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Services /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </div>
  );
};

export default Home;
