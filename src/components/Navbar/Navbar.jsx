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
    <div className="h-16 w-full shadow-md flex items-center justify-between">
      <div className="logo h-16 w-16 mx-8 border-2 border-black drop-shadow-lg rounded-full p-1 text-center">
        <span className="text-5xl font-serif ">A</span>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-8 mx-12 items-center font-serif font-semibold text-sm ">
          <div className="cursor-pointer hover:text-slate-300 ">Home</div>
          <div className="cursor-pointer hover:text-slate-300 ">Skills</div>
          <div className="cursor-pointer hover:text-slate-300 ">Projects</div>
          <div className="flex text-2xl gap-3 text-slate-500">
            <AiFillLinkedin />
            <AiOutlineGithub />
            <AiFillInstagram />
          </div>
          <div className="border hover:border-stone-300 border-black px-4 py-1 cursor-pointer hover:text-slate-300 ">
            Let's Connect
          </div>
        </div>
      </div>
      <div className="flex text-2xl md:hidden absolute left-32 sm:fixed  gap-3 text-slate-500">
        <AiFillLinkedin className="hover:text-black" />
        <AiOutlineGithub className="hover:text-black" />
        <AiFillInstagram className="hover:text-black" />
      </div>
      <div className="block mx-16 md:hidden">
        <BiMenu onClick={toogalSid} className="text-2xl hover:text-slate-400" />
        <div
          ref={ref}
          className="absolute md:hidden hidden top-20 right-0 h-12 w-full transform transition-transform bg-white shadow-xl"
        >
          <div>
            <Sidebar />
          </div>
          <span onClick={toogalSid}>
            <AiOutlineCloseCircle className="absolute text-2xl hover:text-slate-400 top-2 right-6" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
