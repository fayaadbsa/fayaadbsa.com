import React from "react";
import IntroSection from "./Section/IntroSection";
import ProjectsSection from "./Section/ProjectsSection";
import BlogsSection from "./Section/BlogsSection";
import ContactSection from "./Section/ContactSection";
import AppLayout from "@/components/layout/AppLayout";

const HomePage = () => {
  return (
    <AppLayout className="flex flex-col gap-32">
      <IntroSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </AppLayout>
  );
};

export default HomePage;
