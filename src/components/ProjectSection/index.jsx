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

const useStyles = createUseStyles({
  projectContainer: {
    color: "#fff",
    background: "#191919",

    "@media screen and (max-width: 768px)": {
      padding: "100px 0",
    },
  },
  projectWrapper: {
    background: "#212121",
    padding: 40,
    margin: 20,
    borderRadius: 40,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "@media screen and (max-width: 425px)": {
      padding: "40px 10px",
      margin: 10,
      borderRadius: 20,
    },
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
});

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectContainer} id="projects">
      <InfoWrapper>
        <div className={classes.projectWrapper}>
          <InfoRow imgStart={false}>
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
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    See More
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ProjectsIcon} alt="projects" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </div>
      </InfoWrapper>
    </div>
  );
};

export default ProjectSection;
