import React from "react";
import { Button } from "../../components/ButtonElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ProjectElements";
import ProjectsIcon from "../../images/svg-projects.svg";
import { createUseStyles } from "react-jss";

import { ProjectList, projectList } from "./ProjectData";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ContentHeader from "../../components/ContentHeader";
import ProjectCard from "./ProjectCard";
SwiperCore.use([Navigation]);

const useStyles = createUseStyles({
  projectWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    width: 1200,
    background: "#212121",
    borderRadius: 40,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "@media screen and (max-width: 425px)": {
      padding: "40px 10px",
      margin: 10,
      borderRadius: 20,
    },
  },
  swiperRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  swiperWrapper: {
    width: "942px",
    height: "100%",
    margin: "0px 20px",

    "@media screen and (max-width: 1154px)": {
      width: "628px",
    },
    "@media screen and (max-width: 850px)": {
      width: "250px",
    },
  },
  swiperCard: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content",
  },
  swiperImage: {
    width: "300px",
    marginBottom: 16,
  },
  swiperCardTitle: {
    fontSize: "20px",
  },
  swiperCardSubtitle: {
    fontSize: "20px",
    color: "#F98D36",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: "#FBE10F",
      transition: "all 0.2s ease-in-out",
    },
  },
  customNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: "50%",
    cursor: "pointer",

    color: "#212121",
    backgroundColor: "#F98D36",
    backgroundImage: "linear-gradient(45deg, #F98D36, #FBE10F)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",

    "@media screen and (max-width: 500px)": {
      display: "none",
    },
  },
  nextNav: { right: 0 },
});

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <div className="flex justify-center my-12" id="projects">
      <div className={`${classes.projectWrapper} py-12 px-5 mx-7`}>
        <ContentHeader type="project"  />
        <div className="flex flex-wrap justify-around">
          {ProjectList.map((project) => {
            return (
              <div className="basis-full p-3 sm:basis-1/2 md:basis-1/3 ">
                <a
                  className="text-custom-orange text-base"
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="max-w rounded-lg shadow-xl overflow-hidden bg-custom-gray 
                  transition ease-out  hover:scale-105 duration-100">
                    <img
                      className="w-full"
                      src={project.img}
                      alt={project.alt}
                    />

                    <div className="px-6 py-4 text-center">
                      <div className="text-white font-bold text-xl mb-2">
                        {project.title}
                      </div>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
