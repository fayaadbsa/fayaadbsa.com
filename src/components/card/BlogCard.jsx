import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import { lang } from "@/data/lang";
import Tags from "@/components/badge/Tags";
import { Link } from "react-router-dom";
import clsx from "clsx";

const BlogCard = (props) => {
  const { blog } = props;

  return (
    <div
      key={blog.id}
      className={clsx(
        "flex flex-col gap-2 border-2 bg-fx-background border-fx-orange",
        "basis-1/3 p-6 mt-6 rounded-lg"
      )}
    >
      <div className="rounded-lg -mt-12 z-10">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt}
          className="rounded-lg w-full h-36 object-cover mt-auto"
        />
      </div>
      <Link
        to={blog.url}
        target="_blank"
        className="fx-link mt-4 text-lg font-bold min-h-[56px]"
      >
        {blog.title}
      </Link>
      <div className="inline-flex items-center text-sm text-fx-white">
        <FaRegCalendar color="#F2F2F2" className="mr-2" />
        <span>{`${moment(blog.dateCreated).format("MMM DD, YYYY")}`}</span>
        <BsClockHistory className="ml-4 mr-2" />
        <span>
          {blog.timeToRead}
          {lang.blog.card.minRead}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tags tags={blog.tags} />
      </div>
      <p
        className="text-sm text-fx-white"
        style={{
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {blog.description}
      </p>
    </div>
  );
};

export default BlogCard;
