import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProjectThumbnailCard from "../card/ProjectThumbnailCard";

const ProjectCarousel = (props) => {
  const { projects, currentProject, setCurrentProject } = props;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef();

  return (
    <div className="flex flex-row w-full mt-8 items-center">
      <BiChevronLeft
        size={40}
        className={`cursor-pointer relative mt-0 mr-4 ${
          isBeginning ? "text-fx-grey" : "text-fx-orange"
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={24}
        modules={[Navigation]}
        className="w-full h-full"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(state) => {
          setIsBeginning(state.isBeginning);
          setIsEnd(state.isEnd);
        }}
      >
        <div className="hidden mt-8 md:flex">
          {projects.map((project, index) => {
            return (
              <SwiperSlide className="!w-56 !h-20">
                <ProjectThumbnailCard
                  index={index}
                  project={project}
                  setCurrentProject={setCurrentProject}
                  isActive={currentProject.title === project.title}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <BiChevronRight
        size={40}
        className={`cursor-pointer relative mt-0 ml-4 ${
          isEnd ? "text-fx-grey" : "text-fx-orange"
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default ProjectCarousel;
