import React, { useEffect, useState } from "react";
import rubik1 from "images/decorations/rubik-1.svg";
import rubik2 from "images/decorations/rubik-2.svg";
import rubik3 from "images/decorations/rubik-3.svg";

const Backgrounds = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`absolute -z-10 -left-20 top-[30rem] opacity-70`}
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <img src={rubik1} alt="rubik" />
      </div>
      <div
        className={`absolute -z-10 right-12 top-[50rem] opacity-30`}
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      >
        <img src={rubik2} alt="rubik" />
      </div>
      <div
        className={`absolute -z-10 right-12 md:right-16 xl:right-32 top-[6rem] opacity-50`}
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      >
        <img src={rubik3} alt="rubik" />
      </div>
    </>
  );
};

export default Backgrounds;
