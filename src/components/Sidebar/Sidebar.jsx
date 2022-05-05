import React from "react";
import { FaLinkedin, FaGithub, FaGitlab, FaSpotify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CONTACTS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fayaadbsa/",
    icons: <FaLinkedin size={28} fill="#FDA822" />,
  },
  {
    name: "Email",
    url: "mailto:fayet256@gmail.com",
    icons: <MdEmail size={28} fill="#FDA822" />,
  },
  {
    name: "Github",
    url: "https://github.com/fayaadbsa",
    icons: <FaGithub size={28} fill="#FDA822" />,
  },
  {
    name: "Gitlab",
    url: "https://gitlab.com/fayaadbsa/",
    icons: <FaGitlab size={28} fill="#FDA822" />,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/212op27ioukzdxb6rwxioj6ci",
    icons: <FaSpotify size={28} fill="#FDA822" />,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed hidden md:block right-0 top-96 z-20 opacity-70 mr-4 xl:mr-12">
      <div className="flex flex-col items-end">
        {CONTACTS.map((c) => {
          return (
            <a
              href={c.url}
              aria-label={c.name}
              target="_blank"
              rel="noreferrer"
              className="mb-6"
            >
              {c.icons}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
