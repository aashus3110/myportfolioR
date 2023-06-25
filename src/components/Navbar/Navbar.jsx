import React, { useRef } from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const toogalSid = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    }
  };
  const ref = useRef();
  return (
    <div className="w-full h-20 fixed flex justify-between items-center gap-8 text-white font-semibold bg-violet-950 shadow-sm shadow-white ">
      <div className="cursor-pointer mx-2 md:mx-8 hover:text-slate-300 text-2xl">
        Aashutosh
      </div>
      <div className="flex gap-4 md:hidden sm:mx-32 mr-32 ">
        <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
          <AiOutlineGithub className="text-xl hover:text-slate-500" />
        </span>
        <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
          <AiFillLinkedin className="text-xl hover:text-slate-500" />
        </span>
        <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
          <AiFillInstagram className="text-xl hover:text-slate-500" />
        </span>
      </div>
      <div className="md:block hidden">
        <div className=" flex gap-8 items-center lg:mx-12 mx-2 ">
          <div className="flex gap-8 text-sm ">
            <div className="cursor-pointer hover:text-slate-300 ">Home</div>
            <div className="cursor-pointer hover:text-slate-300 ">Skills</div>
            <div className="cursor-pointer hover:text-slate-300 ">Projects</div>
          </div>
          <div className="flex gap-8  ">
            <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
              <AiOutlineGithub className="text-xl hover:text-slate-500" />
            </span>
            <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
              <AiFillLinkedin className="text-xl hover:text-slate-500" />
            </span>
            <span className="border-[1px] border-white rounded-full p-2 hover:border-slate-300">
              <AiFillInstagram className="text-xl hover:text-slate-500" />
            </span>
          </div>
          <div className="flex gap-8  ">
            <span className="border-[1px] border-white p-2 hover:border-slate-300 cursor-pointer hover:text-slate-300 text-sm">
              Let's Connect
            </span>
          </div>
        </div>
      </div>
      <BiMenu
        onClick={toogalSid}
        className="absolute top-6 right-4 md:hidden text-white text-2xl"
      />
      <div
        ref={ref}
        className="absolute md:hidden hidden top-0 right-0 h-full w-screen bg-violet-950 shadow-2xl"
      >
        <div className=" h-full">
          <Sidebar />
        </div>
        <span onClick={toogalSid}>
          <AiOutlineCloseCircle className="absolute text-2xl  top-6 right-6" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
