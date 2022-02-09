import React from "react";
import { Button } from "../ButtonElements";
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
SwiperCore.use([Navigation]);

const useStyles = createUseStyles({
  projectContainer: {
    color: "#fff",
    background: "#191919",
    minHeight: "fit-content",
    display: "flex",
    justifyContent: "center",

    "@media screen and (max-width: 768px)": {
      padding: "100px 0",
    },
  },
  projectWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    maxWidth: 1200,
    padding: "50px 20px",
    margin: 30,

    background: "#212121",
    borderRadius: 40,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "@media screen and (max-width: 425px)": {
      padding: "40px 10px",
      margin: 10,
      borderRadius: 20,
    },
  },
  projectRow: {
    display: "flex",
    marginBottom: 40,

    "@media screen and (max-width: 768px)": {
      flexDirection: "column-reverse",
    },
  },
  swiperRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  heading: {
    fontSize: 36,
    backgroundColor: "#F98D36",
    backgroundImage: "linear-gradient(45deg, #F98D36, #FBE10F)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-background-clip": "text",
    "-moz-text-fill-color": "transparent",

    "@media screen and (max-width: 425px)": {
      fontSize: 32,
    },
  },
  headingIcon: {
    "-webkit-text-fill-color": "black",
    "-moz-text-fill-color": "black",
  },
  subheading: {
    color: "#fff",
    fontSize: 18,
    margin: "16px 0",

    "@media screen and (max-width: 425px)": {
      fontSize: 14,
    },
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
    <div className={classes.projectContainer} id="projects">
      <div className={classes.projectWrapper}>
        <div className={classes.projectRow}>
          <Column1>
            <TextWrapper>
              <h2 className={classes.heading}>
                Past <b>Projects</b>{" "}
                <span className={classes.headingIcon}> 👨‍💻</span>
              </h2>
              <p className={classes.subheading}>
                These are projects that I've made or contributed of. Some of
                them are from college assignments and others are from my
                personal works.
              </p>
              <BtnWrap>
                <LinkS
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Button large>See More</Button>
                </LinkS>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={ProjectsIcon} alt="projects" />
            </ImgWrap>
          </Column2>
        </div>
        <div className={classes.swiperRow}>
          <div className={`${classes.customNav} prevNav`}>
            <FaChevronLeft size={18} />
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={16}
            navigation={{
              nextEl: ".nextNav",
              prevEl: ".prevNav",
            }}
            // pagination={true}
            // modules={[Pagination]}
            className={classes.swiperWrapper}
          >
            {ProjectList.map((pr) => {
              return (
                <SwiperSlide className={classes.swiperCard}>
                  <img
                    src={pr.img}
                    alt="card"
                    className={classes.swiperImage}
                  />
                  <h2 className={classes.swiperCardTitle}>{pr.title}</h2>
                  <a
                    href={pr.urls}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.swiperCardSubtitle}
                  >
                    {pr.subtitle}
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={`${classes.customNav} ${classes.nextNav} nextNav`}>
            <FaChevronRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
