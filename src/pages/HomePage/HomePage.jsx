import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IntroSection from "../../sections/IntroSection";
import BlogsSection from "../../sections/BlogsSection/BlogsSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import Backgrounds from "../../components/Backgrounds/Backgrounds";
import ContactSection from "../../sections/ContactSection/ContactSection";
import Sidebar from "../../components/Sidebar/Sidebar";
import Mobilebar from "../../components/Mobilebar";

const SectionWrapper = (props) => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-16 xl:px-32">
      {props.children}
    </div>
  );
};

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <Navbar handleSidebar={handleSidebar} />
      <Mobilebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <Sidebar />
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
