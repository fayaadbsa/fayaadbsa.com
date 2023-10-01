import wceImg from "../images/projects/wce.png";
import paypeweImg from "../images/projects/paypewe.png";
import educovidImg from "../images/projects/educovid.png";
import debatehallImg from "../images/projects/debatehall.png";
import stacoImg from "../images/projects/staco.png";
import siruco6Img from "../images/projects/siruco6.png";

const PROJECTS_DATA_RAW = [
  {
    img: wceImg,
    alt: "WCE Website",
    title: "Woman Career Expo by UI WIB",
    desc: "Weekend Career Expo by UI Women in Business aims to not only help graduates and students find the right job, but also to help employers acquire top-notch human resources. This web has several features such as Job Expo, Event Registration, and Authentication deployed using Google Cloud Platform.",
    websiteUrl: "https://uiwomeninbusiness.com/",
    startDate: "2023-02",
    endDate: "2023-07",
    tagIds: ["ReactJS", "TailwindCSS", "Django", "PostgreSQL", "Google Cloud Platform"],
  },
  {
    img: paypeweImg,
    alt: "Paypewe Website",
    title: "Paypewe",
    desc: "Paypewe is my first personal portfolio website built with Django, jQuery and Bootstrap. This web has several features such as CRUD, Ajax and authentication which are deployed using Heroku.",
    websiteUrl: "https://paypewe.herokuapp.com/",
    startDate: "2020-07",
    endDate: "2020-10",
    tagIds: ["Django", "jQuery", "Bootstrap", "TDD", "Ajax"],
  },
  {
    img: educovidImg,
    alt: "Educovid Website",
    title: "Educovid",
    desc: "Educovid is a group website project for programming and web development courses. Themed to provide education about covid-19, this website was created using Django, Bootstrap and JQuery.",
    websiteUrl: "https://educovid.herokuapp.com/",
    startDate: "2020-10",
    endDate: "2021-01",
    tagIds: ["Django", "jQuery", "Bootstrap", "TDD", "Ajax"],
  },
  {
    img: stacoImg,
    alt: "STACO Website",
    title: "STACO",
    desc: "Student-Teaching Assistant Connector (STACO) is a website for connecting lecturer assistants with students to make it easier to schedule assistance and tutoring. Made with spring boot and bootstrap",
    websiteUrl: "https://staco-b1.herokuapp.com/",
    startDate: "2021-03",
    endDate: "2021-06",
    tagIds: ["Spring Boot", "Bootstrap"],
  },
  {
    img: siruco6Img,
    alt: "SIRUCO Website",
    title: "SIRUCO",
    desc: "SIRUCO is a hospital information system that has CRUD features using vanilla postgresql in the django framework (without using orm).",
    websiteUrl: "https://siruco6.herokuapp.com/",
    startDate: "2021-03",
    endDate: "2021-06",
    tagIds: ["PostgeSQL", "Django", "Bootstrap", "Ajax"],
  },
  {
    img: debatehallImg,
    alt: "DebateHall Website",
    title: "DebateHall",
    desc: "DebateHall is a website for conducting online debates that features debate activities, debate rooms, online courses, and interesting blogs created using django and bootstrap",
    websiteUrl: "https://debatehall.herokuapp.com/",
    startDate: "2021-08",
    endDate: "2022-01",
    tagIds: ["Django", "Bootstrap"],
  },
];

export const PROJECTS_DATA = PROJECTS_DATA_RAW.map((project, id) => ({
  id: id,
  ...project,
}));
