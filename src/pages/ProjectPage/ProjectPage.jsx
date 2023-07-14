import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ProjectActiveCard from "@/components/card/ProjectActiveCard";
import ProjectCarousel from "@/components/carousel/ProjectCarousel";
import { PROJECTS_DATA } from "@/data/ProjectsData";
import { lang } from "@/data/lang";
import { BLOGS_DATA } from "@/data/BlogsData";
import BlogCard from "@/components/card/BlogCard";

const ProjectPage = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS_DATA[0]);

  return (
    <AppLayout>
      <div className="flex flex-col">
        <div className="self-center">
          <span className="text-6xl font-bold text-fx-linear-orange-yellow-aqua">
            Projects
          </span>
        </div>
        <div className="flex mt-9 justify-between gap-4 flex-col md:flex-row">
          {BLOGS_DATA.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectPage;
