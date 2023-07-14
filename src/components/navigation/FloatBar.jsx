import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CONTACTS_DATA } from "@/data/ContactsData";
import { Link } from "react-router-dom";

const FloatBar = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        absolute hidden md:block top-96 z-20 right-0 mr-4 2xl:mr-10
        opacity-70 xl:mr-12 transition duration-1000 ease-out"
      style={{ transform: `translateY(${offsetY * 1}px)` }}
    >
      <div className="flex flex-col items-end">
        {CONTACTS_DATA.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              rel="noreferrer"
              className="mb-6 hover:drop-shadow-fx-soft transition-all"
            >
              {item.icons}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloatBar;
