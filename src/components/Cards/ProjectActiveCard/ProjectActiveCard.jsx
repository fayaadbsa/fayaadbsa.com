import moment from "moment";
import React from "react";
import { lang } from "data/lang";
import Tags from "components/Atomic/Tags/Tags";
import Button from "components/Atomic/Button/Button";

const ProjectActiveCard = (props) => {
  const { project } = props;

  return (
    <div className="flex items-start flex-col mt-9 lg:flex-row">
      <div className="flex min-w-full w-full mr-16 sm:min-w-[540px] sm:w-[540px]">
        <img
          className="rounded-lg w-full object-contain"
          src={project.img}
          alt={project.alt}
        />
      </div>
      <div className="flex flex-col mt-6 lg:mt-0">
        <div>
          <p className="inline font-bold text-fx-linear-orange-yellow-aqua text-3xl">
            {project.title}
          </p>
        </div>
        <div className="flex flex-wrap mt-6">
          <Tags tags={project.tagIds} />
        </div>
        <div className="mt-6 font-light text-fx-grey">
          {`${moment(project.startDate).format("MMMM YYYY")} - ${moment(
            project.endDate
          ).format("MMMM YYYY")}`}
        </div>
        <p
          className="mt-6 text-lg text-fx-white"
          style={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.desc}
        </p>
        <div className="mt-6">
          <Button
            isLink={true}
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {lang.project.button.label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectActiveCard;
