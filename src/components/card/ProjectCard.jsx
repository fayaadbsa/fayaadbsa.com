import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import { lang } from "@/data/lang";
import Tags from "@/components/tag/Tags";
import { Link } from "react-router-dom";
import clsx from "clsx";

const ProjectCard = ({ project }) => {
  const {
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
    <div
      className={clsx(
        "flex flex-col gap-2 border-2 bg-fx-background border-fx-orange",
        "basis-1/3 p-6 mt-6 rounded-lg"
      )}
    >
      <div className="rounded-lg -mt-12 z-10">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg w-full h-36 object-cover mt-auto"
        />
      </div>
      <Link
        to={websiteUrl}
        target="_blank"
        className="fx-link mt-4 text-lg font-bold"
      >
        {title}
      </Link>
      <div className="inline-flex items-center text-sm text-fx-white">
        <FaRegCalendar color="#F2F2F2" className="mr-2" />
        {`${moment(startDate).format("MMMM YYYY")} - ${moment(endDate).format(
          "MMMM YYYY"
        )}`}
        {/* <span>{`${moment(dateCreated).format("MMM DD, YYYY")}`}</span> */}
        {/* <BsClockHistory className="ml-4 mr-2" />
        <span>
          {timeToRead}
          {lang.blog.card.minRead}
        </span> */}
      </div>
      <Tags tags={tags} />
      <p
        className="text-sm text-fx-white mt-auto"
        style={{
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
