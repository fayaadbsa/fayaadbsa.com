import React from "react";
import { blogsData } from "../../data/BlogsData";
import { FaRegCalendar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import Tags from "../../components/Tags/Tags";
import moment from "moment";

const BlogSection = () => {
  return (
    <div className="flex flex-col pb-32" id="projects">
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          Blogs
        </span>
      </div>
      <div className="flex mt-9 justify-between gap-4 flex-col md:flex-row">
        {blogsData.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = (props) => {
  const blog = props.blog;

  return (
    <a
      key={blog.id}
      className="flex flex-col fx-card basis-1/3 p-6 mt-6 rounded-lg"
      href={blog.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="rounded-lg -mt-12 mb-6 z-10">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt}
          className="rounded-lg w-full h-36 object-cover mt-auto"
        />
      </div>
      <p className="text-fx-linear-orange-yellow font-bold">{blog.title}</p>
      <div className="inline-flex items-center mt-2 text-sm text-fx-white-sec">
        <FaRegCalendar color="#F2F2F2" className="mr-2" />{" "}
        <span>{`${moment(blog.dateCreated).format("MMM DD, YYYY")}`}</span>
        <BsClockHistory className="ml-4 mr-2" />
        <span>{blog.timeToRead} min read</span>
      </div>
      <div className="flex flex-wrap mt-2">
        <Tags tags={blog.tags} />
      </div>
      <p
        className="text-sm"
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
    </a>
  );
};

const Tag = (props) => {
  const tag = props.tag;

  return (
    <div
      key={tag.id}
      className="bg-gray-600 inline-flex px-3 py-1 
      mr-2 my-4 rounded drop-shadow-md"
    >
      <h5 className="text-gray-200 font-light">{tag.name}</h5>
    </div>
  );
};

export default BlogSection;
