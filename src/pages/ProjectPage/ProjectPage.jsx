import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ProjectCard from "@/components/card/ProjectCard";
import { PROJECTS } from "@/data/ProjectsData";

const ProjectPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col">
        <div className="self-center">
          <span className="text-6xl font-bold text-fx-linear-orange-yellow-aqua">
            Projects
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 gap-x-6 gap-y-10">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectPage;
