import React, { useState } from "react";
import Footer from "components/Footer";
import IntroSection from "sections/IntroSection/IntroSection";
import BlogsSection from "sections/BlogsSection/BlogsSection";
import ProjectsSection from "sections/ProjectsSection/ProjectsSection";
import Backgrounds from "components/Backgrounds/Backgrounds";
import ContactSection from "sections/ContactSection/ContactSection";
import MobileBar from "components/MobileBar/MobileBar";
import NavBar from "components/NavBar/NavBar";
// import SideBar from "components/SideBar/SideBar";
import { SectionWrapper } from "utils/SectionWrapper";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <NavBar handleSidebar={handleSidebar} />
      <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} />
      {/* <SideBar /> */}
      <SectionWrapper>
        <IntroSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </SectionWrapper>
      <Footer />
      <Backgrounds />
    </div>
  );
};

export default HomePage;
