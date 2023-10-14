import React from "react";
import ProjectCard from "@/components/card/ProjectCard";
import { PROJECTS } from "@/data/ProjectsData";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const ProjectPage = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col transition-all duration-700",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="self-center">
        <span className="self-center text-6xl font-bold text-fx-linear-orange-yellow-aqua">
          Projects
        </span>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10",
          "mt-16"
        )}
      >
        {PROJECTS.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
