import React from "react";
import Tags from "@/components/tag/Tags";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Button from "../button/Button";
import { BUTTON_VARIANT } from "@/utils/enum";

const ProjectCard = ({ project }) => {
  const { image, imageAlt, title, slug, description, websiteUrl, tags } =
    project;

  return (
    <Link
      // to={`/projects/${slug}`}
      to={websiteUrl}
      target="_blank"
      className={clsx(
        "flex flex-col gap-2 border-2 bg-fx-background border-fx-orange",
        "p-4 mt-6 rounded-lg"
      )}
    >
      <div className="rounded-lg -mt-12 z-10">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg w-full h-50 object-cover mt-auto"
        />
      </div>
      <Button className={"text-lg font-bold"} variant={BUTTON_VARIANT.LINK}>
        {title}
      </Button>
      <Tags tags={tags.slice(0, 2)} />
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
    </Link>
  );
};

export default ProjectCard;
