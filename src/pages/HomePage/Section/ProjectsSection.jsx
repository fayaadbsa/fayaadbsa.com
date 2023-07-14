import React, { useState } from "react";
import ProjectActiveCard from "@/components/card/ProjectActiveCard";
import ProjectCarousel from "@/components/carousel/ProjectCarousel";
import { lang } from "@/data/lang";
import { PROJECTS_DATA } from "@/data/ProjectsData";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS_DATA[0]);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id={lang.project.id}
      ref={ref}
      className={clsx(
        "flex flex-col transition-all duration-700 delay-300",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          {lang.project.title}
        </span>
      </div>
      <ProjectActiveCard project={currentProject} />
      <ProjectCarousel
        projects={PROJECTS_DATA}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
};

export default ProjectsSection;
