import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../../data/BlogData";

const BlogSection = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="flex flex-col mx-7 w-[1200px]">
        <h4 className="text-custom-orange font-light">── My Blogs</h4>
        <h1 className="text-white text-2xl">Some of my blogs</h1>
        <div className="flex mt-4 justify-between gap-4">
          {BlogData.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = (props) => {
  const blog = props.blog;

  return (
    <div
      key={blog.id}
      className=" bg-custom-gray border-2 border-gray-600
      basis-1/3 p-6 rounded-lg drop-shadow-md
      transition ease-out hover:scale-[1.01] duration-200"
    >
      <a
        href={blog.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col h-full"
      >
        <h4 className="text-custom-orange font-medium">{blog.title}</h4>
        <div>
          {blog.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt}
          className="w-full h-36 object-cover mt-auto"
        />
      </a>
    </div>
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
