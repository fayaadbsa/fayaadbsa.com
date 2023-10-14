import React from "react";

const ProjectThumbnailCard = ({ project, setCurrentProject, isActive }) => {
  const { image, title } = project;

  return (
    <div
      onClick={() => setCurrentProject(project)}
      className={`text-center rounded-xl cursor-pointer w-56 h-20 mr-4 border-4
        ${isActive ? "border-fx-orange" : "border-transparent"} `}
    >
      <div
        className="!bg-cover bg-top rounded-lg h-full py-6 brightness-50"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <p className="relative px-4 -top-1/2 -translate-y-1/2 z-10 font-semibold text-fx-white">
        {title}
      </p>
    </div>
  );
};

export default ProjectThumbnailCard;
