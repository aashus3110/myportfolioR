import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./Project.css";
import Project1 from "../../img/Project1.png";

const Project = () => {
  return (
    <div className="projects bg-violet-900 min-h-[84vh] pt-12 px-8">
      <div className="flex flex-col items-baseline py-8">
        <span className="text-base py-2 mx-4 text-violet-400 font-semibold">
          A Set of Particular Projects I do :-
        </span>
        <span className="text-3xl py-2 mx-16 text-white font-bold">
          My Projects
        </span>
      </div>
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={Project1}
            alt=""
            className="w-full h-64 object-cover rounded-2xl  md:h-80 lg:h-96"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Project1}
            alt=""
            className="w-full h-64 object-cover rounded-2xl  md:h-80 lg:h-96"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Project1}
            alt=""
            className="w-full h-64 object-cover rounded-2xl  md:h-80 lg:h-96"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Project1}
            alt=""
            className="w-full h-64 object-cover rounded-2xl  md:h-80 lg:h-96"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Project1}
            alt=""
            className="w-full h-64 object-cover rounded-2xl  md:h-80 lg:h-96"
          />
        </SwiperSlide>

        <div className="slider-controler !hidden">
          <AiOutlineCaretLeft className="swiper-button-prev !flex" />
          <div className="swiper-pagination"></div>
          <AiOutlineCaretRight className="swiper-button-next !flex" />
        </div>
      </Swiper>
      <hr className="border-violet-400 w-full my-8 md:m-0 border-2 rounded-md" />
    </div>
  );
};

export default Project;
