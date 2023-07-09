import React from "react";
import Button from "components/Atomic/Button/Button";
import { lang } from "data/lang";
import { BLOGS_DATA } from "data/BlogsData";
import BlogCard from "components/Cards/BlogCard/BlogCard";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  return (
    <div className="flex flex-col pb-32" id={lang.blog.id}>
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          {lang.blog.title}
        </span>
      </div>
      <div className="flex mt-9 justify-between gap-4 flex-col md:flex-row">
        {BLOGS_DATA.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <div className="flex self-end mt-4">
        <Link to={lang.blog.button.link} target="_blank">
          <Button>{lang.blog.button.label}</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsSection;
