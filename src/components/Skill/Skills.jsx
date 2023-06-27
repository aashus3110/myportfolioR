import React from "react";
import Webdev from "../../img/webdev.png";
import WebDeveloper from "../../img/WebDeveloper.png";
import UIUX from "../../img/UIUX.png";
import ReactD from "../../img/ReactD.png";
import Progres from "../Progress/Progres";

const Skills = () => {
  return (
    <div className="md:h-full pt-12 px-8 h-full w-full bg-violet-900 text-white">
      <div className="flex flex-col items-baseline py-8">
        <span className="text-base py-2 mx-4 text-violet-400 font-semibold">
          A Set of Particular Skills I know :-
        </span>
        <span className="text-3xl py-2 mx-16 text-white font-bold">
          My Skills
        </span>
      </div>
      <div className="border-l-2 border-t-0 lg:border-t-2 lg:border-l-0 h-full md:h-[85%] lg:h-[60%] border-violet-300 flex flex-col  lg:flex-row lg:justify-evenly ">
        <div className="h-12 w-20 lg:w-0 border-b-2 lg:border-r-2 border-violet-300"></div>
        <div className="h-[12rem] w-[80vw] lg:w-[20vw] lg:h-[60vh]">
          <div className="flex flex-col items-center py-8">
            <span>Web Developer </span>
            <img className="h-20 w-40 " src={WebDeveloper} alt="" />
            <Progres value={75} text={"75%"} />
          </div>
        </div>
        <div className="h-12 w-20 lg:w-0 border-b-2 lg:border-r-2 border-violet-300"></div>
        <div className="h-[12rem] w-[80vw] lg:w-[20vw] lg:h-[60vh] ">
          <div className="flex flex-col items-center py-8">
            <span>UI UX Designer </span>
            <img className="h-20 w-40 " src={UIUX} alt="" />
            <Progres value={85} text={"85%"} />
          </div>
        </div>
        <div className="h-12 w-20 lg:w-0 border-b-2 lg:border-r-2 border-violet-300"></div>
        <div className="h-[12rem] w-[80vw] lg:w-[20vw] lg:h-[60vh] ">
          <div className="flex flex-col items-center py-8">
            <span>React Developer </span>
            <img className="h-20 w-40 " src={ReactD} alt="" />
            <Progres value={95} text={"95%"} />
          </div>
        </div>
        <div className="h-12 w-20 lg:w-0 border-b-2 lg:border-r-2 border-violet-300"></div>
        <div className="h-[12rem] w-[80vw] lg:w-[20vw] lg:h-[60vh] ">
          <div className="flex flex-col items-center py-8">
            <span>Web Development </span>
            <img className="h-20 w-40 " src={Webdev} alt="" />
            <Progres value={85} text={"85%"} />
          </div>
        </div>
      </div>
      <hr className="border-violet-400 w-full mt-12 md:m-0 border-2 rounded-md" />
    </div>
  );
};

export default Skills;
