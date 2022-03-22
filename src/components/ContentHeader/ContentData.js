import ProjectsIcon from "../../images/svg-projects.svg";
import ExperienceIcon from "../../images/svg-experience.svg";

export const PROJECT_CONTENT = {
  heading: (
    <>
      Past <b>Projects</b>{" "}
    </>
  ),
  headingIcon: "👨‍💻",
  subheading:
    "These are projects that I've made or contributed of. Some of them are from college assignments and others are from my personal works.",
  image: ProjectsIcon,
  imgStart: false,
  hasButton: false,
  hasImage: false,
};

export const EXPERIENCE_CONTENT = {
  heading: (
    <>
      Working <b>Experience</b>{" "}
    </>
  ),
  headingIcon: "💼",
  subheading: "My work experience as part time worker, intern and volunteer. ",
  image: ExperienceIcon,
  imgStart: true,
  hasButton: true,
  hasImage: true,
};
