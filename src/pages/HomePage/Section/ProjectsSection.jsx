import React, { useState } from "react";
import ProjectActiveCard from "components/Card/ProjectActiveCard";
import ProjectCarousel from "components/Carousel/ProjectCarousel";
import { lang } from "data/lang";
import { PROJECTS_DATA } from "data/ProjectsData";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS_DATA[0]);

  return (
    <div className="flex flex-col pb-32" id={lang.project.id}>
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
