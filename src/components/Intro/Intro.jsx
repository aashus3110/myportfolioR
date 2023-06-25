import React from "react";
import IntroLeft from "../IntroLeft/IntroLeft";
import IntroRight from "../IntroRight/IntroRight";

const Intro = () => {
  return (
    <div className="px-8 bg-violet-900 w-full h-full">
      <div className="flex flex-col justify-center md:flex-row md:h-4/5 lg:h-full items-center w-full h-screen">
        <span className="md:w-[50%] w-full pt-32 md:pt-12 text-lg text-white font-bold text-center">
          <IntroRight />
        </span>
        <span className="w-full md:w-[50%]">
          <IntroLeft />
        </span>
      </div>
      <hr className="border-violet-400 w-full border-2 rounded-md" />
    </div>
  );
};

export default Intro;
