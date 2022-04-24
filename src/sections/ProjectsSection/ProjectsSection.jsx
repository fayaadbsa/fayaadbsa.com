import moment from "moment";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Tags from "../../components/Tags/Tags";
import { projectsData } from "../../data/ProjectsData";

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
        <div className="flex items-start flex-col mt-9 lg:flex-row">
          <div className="flex min-w-full w-full mr-16 sm:min-w-[540px] sm:w-[540px] ">
            <img
              className="rounded-lg w-full object-contain"
              src={currentProject.img}
              alt={currentProject.alt}
            />
          </div>
          <div className="flex flex-col mt-6 lg:mt-0">
            <div>
              <p className="inline font-bold text-fx-linear-orange-yellow-aqua text-3xl">
                {currentProject.title}
              </p>
            </div>
            <div className="flex flex-wrap mt-6">
              <Tags tags={currentProject.tagIds} />
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
      {projectsData && (
        <div className="hidden mt-12 md:flex">
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
      )}
    </div>
  );
};

export default ProjectsSection;
