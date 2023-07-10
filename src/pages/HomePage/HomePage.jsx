import React, { useState } from "react";
import IntroSection from "./Section/IntroSection";
import ProjectsSection from "./Section/ProjectsSection";
import BlogsSection from "./Section/BlogsSection";
import ContactSection from "./Section/ContactSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import Navbar from "@/components/navigation/NavBar";
import Mobilebar from "@/components/navigation/MobileBar";
import Floatbar from "@/components/navigation/FloatBar";
import Backgrounds from "@/components/background/Backgrounds";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <Navbar handleSidebar={handleSidebar} />
      <Mobilebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <Floatbar />
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
