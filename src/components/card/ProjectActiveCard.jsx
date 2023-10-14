import moment from "moment";
import React from "react";
import { lang } from "@/data/lang";
import Tags from "@/components/tag/Tags";
import Button from "@/components/button/Button";
import { Link } from "react-router-dom";

const ProjectActiveCard = ({ project }) => {
  const {
    id,
    image,
    imageAlt,
    title,
    description,
    websiteUrl,
    startDate,
    endDate,
    tags,
  } = project;

  return (
    <div className="flex items-start flex-col mt-9 lg:flex-row">
      <div className="flex min-w-full w-full mr-16 sm:min-w-[540px] sm:w-[540px]">
        <img
          className="rounded-lg w-full object-contain"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="flex flex-col gap-6 lg:mt-0">
        <div>
          <p className="inline font-bold text-fx-linear-orange-yellow-aqua text-3xl">
            {title}
          </p>
        </div>
        <Tags tags={tags} />
        <div className="font-light text-fx-grey">
          {`${moment(startDate).format("MMMM YYYY")} - ${moment(endDate).format(
            "MMMM YYYY"
          )}`}
        </div>
        <p
          className="text-lg text-fx-white"
          style={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>
        <div className="w-fit">
          <Link to={websiteUrl} target="_blank">
            <Button>{lang.project.button.label}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectActiveCard;
