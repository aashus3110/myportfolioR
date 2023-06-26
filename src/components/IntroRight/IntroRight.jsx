import React from "react";
import Typewriter from "typewriter-effect";

const IntroRight = () => {
  return (
    <div className="bg-violet-900 w-[100%] md:text-4xl text-2xl">
      <div className="">
        <div className="">
          Hi, My name is
          <span className="text-violet-400"> Aashutosh</span>
        </div>
        <div className="">and I am a passionate</div>
        <div className="text-violet-300 md:py-4 capitalize">
          <Typewriter
            options={{
              strings: ["web developer", "ui ux design", "React web Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroRight;
