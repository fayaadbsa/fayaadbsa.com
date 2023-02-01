import paypeweImg from "../images/projects/paypewe.png";
import educovidImg from "../images/projects/educovid.png";
import debatehallImg from "../images/projects/debatehall.png";
import stacoImg from "../images/projects/staco.png";
import siruco6Img from "../images/projects/siruco6.png";

export const PROJECTS_DATA = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
