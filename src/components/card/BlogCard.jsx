import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import { lang } from "data/lang";
import Tags from "components/badge/Tags";

const BlogCard = (props) => {
  const { blog } = props;

  return (
    <div
      key={blog.id}
      className="flex flex-col border-2 border-fx-orange basis-1/3 p-6 mt-6 rounded-lg"
    >
      <div className="rounded-lg -mt-12 mb-6 z-10">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt}
          className="rounded-lg w-full h-36 object-cover mt-auto"
        />
      </div>
      <a
        href={blog.url}
        target="_blank"
        rel="noreferrer"
        className="fx-link font-bold"
      >
        {blog.title}
      </a>
      <div className="inline-flex items-center mt-2 text-sm text-fx-white-sec">
        <FaRegCalendar color="#F2F2F2" className="mr-2" />
        <span>{`${moment(blog.dateCreated).format("MMM DD, YYYY")}`}</span>
        <BsClockHistory className="ml-4 mr-2" />
        <span>
          {blog.timeToRead}
          {lang.blog.card.minRead}
        </span>
      </div>
      <div className="flex flex-wrap mt-2">
        <Tags tags={blog.tags} />
      </div>
      <p
        className="text-sm text-fx-white"
        style={{
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
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
