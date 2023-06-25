import React from "react";

const Skills = () => {
  return (
    <div className="md:h-screen py-12 px-8 h-full w-full bg-violet-900 text-white">
      <div className=" border-l-2 border-t-0 lg:border-t-2 lg:border-l-0 h-96 border-violet-300 flex flex-col lg:justify-evenly ">
        <div className="h-12 w-20 lg:w-0 border-b-2 border-violet-300"></div>
        <div className="h-20 w-[80vw] bg-red-400"></div>
        <div className="h-12 w-20 lg:w-0 border-b-2 border-violet-300"></div>
        <div className="h-20 w-[80vw] bg-red-400"></div>
        <div className="h-12 w-20 lg:w-0 border-b-2 border-violet-300"></div>
        <div className="h-20 w-[80vw] bg-red-400"></div>
        <div className="h-12 w-20 lg:w-0 border-b-2 border-violet-300"></div>
        <div className="h-20 w-[80vw] bg-red-400"></div>
      </div>
      <hr className="border-violet-400 w-full mt-4 border-2 rounded-md" />
    </div>
  );
};

export default Skills;
