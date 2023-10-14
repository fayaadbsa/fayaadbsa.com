import { PROJECTS } from "@/data/ProjectsData";
import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  // handle empty
  const { image, imageAlt, title, description, websiteUrl, tags } = project;

  return (
    <div className="flex flex-col">
      <div className="self-center">
        <span className=" text-6xl font-bold text-fx-linear-orange-yellow-aqua">
          {title}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
