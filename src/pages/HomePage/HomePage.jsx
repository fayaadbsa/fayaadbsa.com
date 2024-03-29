import React from "react";
import IntroSection from "./Section/IntroSection";
import ProjectsSection from "./Section/ProjectsSection";
import BlogsSection from "./Section/BlogsSection";
import ContactSection from "./Section/ContactSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <IntroSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
