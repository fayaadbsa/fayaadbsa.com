import wceImg from "../images/projects/wce.png";
import paypeweImg from "../images/projects/paypewe.png";
import educovidImg from "../images/projects/educovid.png";
import debatehallImg from "../images/projects/debatehall.png";
import stacoImg from "../images/projects/staco.png";
import siruco6Img from "../images/projects/siruco6.png";
import { TAG_ENUM } from "@/utils/enum";

export const PROJECTS = [
  {
    image: wceImg,
    imageAlt: "WCE Website",
    title: "Weekend Career Expo by UI WIB",
    slug: "weekend-career-expo",
    description:
      "Weekend Career Expo by UI Women in Business aims to not only help graduates and students find the right job, but also to help employers acquire top-notch human resources. This web has several features such as Job Expo, Event Registration, and Authentication deployed using Google Cloud Platform.",
    websiteUrl: "https://uiwomeninbusiness.com/",
    startDate: "2023-02",
    endDate: "2023-07",
    tags: [
      TAG_ENUM.REACT,
      TAG_ENUM.TW,
      TAG_ENUM.DJ,
      TAG_ENUM.PSQL,
      TAG_ENUM.GCP,
    ],
    repository: "",
    video: "",
    role: "",
  },
  {
    image: paypeweImg,
    imageAlt: "Paypewe Website",
    title: "Paypewe",
    slug: "paypewe",
    description:
      "Paypewe is my first personal portfolio website built with Django, jQuery and Bootstrap. This web has several features such as CRUD, Ajax and authentication which are deployed using Heroku.",
    websiteUrl: "https://paypewe.herokuapp.com/",
    startDate: "2020-07",
    endDate: "2020-10",
    tags: [TAG_ENUM.DJ, TAG_ENUM.JQ, TAG_ENUM.BS, TAG_ENUM.TDD, TAG_ENUM.AJAX],
  },
  {
    image: educovidImg,
    imageAlt: "Educovid Website",
    title: "Educovid",
    slug: "educovid",
    description:
      "Educovid is a group website project for programming and web development courses. Themed to provide education about covid-19, this website was created using Django, Bootstrap and JQuery.",
    websiteUrl: "https://educovid.herokuapp.com/",
    startDate: "2020-10",
    endDate: "2021-01",
    tags: [TAG_ENUM.DJ, TAG_ENUM.JQ, TAG_ENUM.BS, TAG_ENUM.TDD, TAG_ENUM.AJAX],
  },
  {
    image: stacoImg,
    imageAlt: "STACO Website",
    title: "STACO",
    slug: "staco",
    description:
      "Student-Teaching Assistant Connector (STACO) is a website for connecting lecturer assistants with students to make it easier to schedule assistance and tutoring. Made with spring boot and bootstrap",
    websiteUrl: "https://staco-b1.herokuapp.com/",
    startDate: "2021-03",
    endDate: "2021-06",
    tags: [TAG_ENUM.SB, TAG_ENUM.BS],
  },
  {
    image: siruco6Img,
    imageAlt: "SIRUCO Website",
    title: "SIRUCO",
    slug: "siruco",
    description:
      "SIRUCO is a hospital information system that has CRUD features using vanilla postgresql in the django framework (without using orm).",
    websiteUrl: "https://siruco6.herokuapp.com/",
    startDate: "2021-03",
    endDate: "2021-06",
    tags: [TAG_ENUM.PSQL, TAG_ENUM.DJ, TAG_ENUM.BS, TAG_ENUM.AJAX],
  },
  {
    image: debatehallImg,
    imageAlt: "DebateHall Website",
    title: "DebateHall",
    slug: "debatehall",
    description:
      "DebateHall is a website for conducting online debates that features debate activities, debate rooms, online courses, and interesting blogs created using django and bootstrap",
    websiteUrl: "https://debatehall.herokuapp.com/",
    startDate: "2021-08",
    endDate: "2022-01",
    tags: [TAG_ENUM.DJ, TAG_ENUM.BS],
  },
];

const PROJECT_MAIN_SLUG = "weekend-career-expo";
export const PROJECT_MAIN = PROJECTS.find((p) => p.slug === PROJECT_MAIN_SLUG);
