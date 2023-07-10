import React, { useState } from "react";
import { SectionWrapper } from "components/SectionWrapper";
import IntroSection from "./Section/IntroSection";
import ProjectsSection from "./Section/ProjectsSection";
import BlogsSection from "./Section/BlogsSection";
import ContactSection from "./Section/ContactSection";
// import MobileBar from "components/navigation/MobileBar";
import NavBar from "components/navigation/NavBar";
import FloatBar from "components/navigation/FloatBar";
import Footer from "components/footer/Footer";
import Backgrounds from "components/background/Backgrounds";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <NavBar handleSidebar={handleSidebar} />
      {/* <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} /> */}
      <FloatBar />
      <SectionWrapper>
        <IntroSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </SectionWrapper>
      {/* <Footer /> */}
      <Backgrounds />
    </div>
  );
};

export default HomePage;
