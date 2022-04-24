import moment from "moment";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { projectsData } from "../../data/ProjectsData";
import { tagsData } from "../../data/TagsData";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    if (projectsData) setCurrentProject(projectsData[0]);
  }, []);

  return (
    <div className="flex flex-col pb-32" id="projects">
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          Projects
        </span>
      </div>
      {currentProject && (
        <div className="flex mt-9 h-[324px]">
          <div className="min-w-[512px] w-[512px] mr-16">
            <img
              className="rounded-lg w-full"
              src={currentProject.img}
              alt={currentProject.alt}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="inline font-bold text-fx-linear-orange-yellow-aqua text-3xl">
                {currentProject.title}
              </p>
            </div>
            <div className="mt-6">
              {currentProject.tagIds.map((tagId) => {
                return (
                  <p className="inline p-2 text-fx-aqua bg-fx-aqua-dark mr-2 rounded">
                    {tagsData.find((t) => t.id === tagId)?.name}
                  </p>
                );
              })}
            </div>
            <div className="mt-6 font-light text-fx-grey">
              {`${moment(currentProject.startDate).format(
                "MMMM YYYY"
              )} - ${moment(currentProject.endDate).format("MMMM YYYY")}`}
            </div>
            <p className="mt-6 text-lg">{currentProject.desc}</p>
            <div className="mt-6">
              <a
                href={currentProject.websiteUrl || "/"}
                target="_blank"
                rel="noreferrer"
              >
                <Button>Go to Website</Button>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12 flex">
        {projectsData.slice(0, 5).map((project, index) => {
          return (
            <div
              onClick={() => setCurrentProject(projectsData[index])}
              className={`text-center rounded-xl cursor-pointer w-56 mr-4 border-4
                ${
                  currentProject?.id === project?.id
                    ? "border-fx-orange"
                    : "border-transparent"
                } `}
            >
              <div
                className="bg-cover bg-top rounded-lg h-full py-6 brightness-50"
                style={{
                  backgroundImage: `url(${project.img})`,
                }}
              ></div>
              <p className="relative -top-1/2 -translate-y-1/2 z-10 font-semibold">
                {project.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
