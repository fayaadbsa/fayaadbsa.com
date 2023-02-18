import React from "react";

const ProjectCard = (props) => {
  const { project, index, setCurrentProjectId, isActive } = props;

  return (
    <div
      onClick={() => setCurrentProjectId(index)}
      className={`text-center rounded-xl cursor-pointer w-56 h-20 mr-4 border-4
        ${isActive ? "border-fx-orange" : "border-transparent"} `}
    >
      <div
        className="!bg-cover bg-top rounded-lg h-full py-6 brightness-50"
        style={{
          backgroundImage: `url(${project.img})`,
        }}
      ></div>
      <p className="relative -top-1/2 -translate-y-1/2 z-10 font-semibold text-fx-white">
        {project.title}
      </p>
    </div>
  );
};

export default ProjectCard;