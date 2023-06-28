import React from "react";
import Typewriter from "typewriter-effect";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import Resume from "./resume.pdf";

const IntroRight = () => {
  return (
    <div className="bg-violet-900 w-[100%] md:text-4xl text-2xl">
      <div className="">
        <div className="">
          Hi, My name is
          <span className="text-violet-400"> Aashutosh</span>
        </div>
        <div className="">and I am a passionate</div>
        <div className="text-violet-300 md:py-4 capitalize mb-5">
          <Typewriter
            options={{
              strings: ["web developer", "ui ux design", "React web Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
        </div>
        <div className="text-sm font-semibold flex w-full justify-center">
          <a href={Resume} download>
            <button className="px-4 py-1 mx-1 border-violet-300 border-2 rounded-md hover:text-violet-950 hover:border-violet-950 hover:shadow-xl shadow-violet-300 flex items-center gap-2">
              <MdOutlineDownloadForOffline />
              Download CV
            </button>
          </a>
          <a
            href="https://github.com/aashus3110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-1 mx-1 border-violet-300 border-2 rounded-md hover:text-violet-950 hover:border-violet-950 hover:shadow-xl shadow-violet-300 flex items-center gap-2">
              <AiOutlineGithub />
              Git Hub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroRight;
