import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1 from "../../img/Project1.png";

const Project = () => {
  return (
    <div className="bg-violet-900 ">
      <div className="flex flex-col items-baseline py-8">
        <span className="text-base py-2 mx-4 text-violet-400 font-semibold">
          A Set of Particular Projects I do :-
        </span>
        <span className="text-3xl py-2 mx-16 text-white font-bold">
          My Projects
        </span>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="flex overflow-hidden p-12 w-full "
      >
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} className="w-[30rem] h-60 rounded-xl" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
