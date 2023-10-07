import React from "react";
import Button from "@/components/button/Button";
import { lang } from "@/data/lang";
import { BLOGS } from "@/data/BlogsData";
import BlogCard from "@/components/card/BlogCard";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const BlogsSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id={lang.blog.id}
      ref={ref}
      className={clsx(
        "flex flex-col transition-all duration-700 delay-300",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="flex items-center">
        <div className="border-b border-fx-orange w-14 mr-6" />
        <span className="text-3xl font-light text-fx-linear-orange-yellow">
          {lang.blog.title}
        </span>
      </div>
      <div className="flex mt-9 justify-between gap-4 flex-col md:flex-row">
        {BLOGS.map((blog) => (
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
