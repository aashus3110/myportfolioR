import React, { useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import NavList from "../NavList/NavList";

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
    <>
      <div className="Navbar h-16 flex w-full shadow-md shadow-gray-400 ">
        <div className="font-serif rotateY cursor-pointer border-2 mx-8 drop-shadow-lg border-solid text-shadow-2 rounded-full h-16 w-16 text-center ">
          <span className="text-5xl  text-center">A</span>
        </div>
        <div className="hidden md:block absolute right-2">
          <NavList />
        </div>
        <HiOutlineMenu
          onClick={toogalSid}
          className="absolute text-lg top-6 right-6 md:hidden"
        />
        <div
          ref={ref}
          className="absolute md:hidden hidden top-0 right-0 h-full w-2/4 bg-white shadow-2xl"
        >
          <div className=" h-full">
            <Sidebar />
          </div>
          <span onClick={toogalSid}>
            <AiOutlineCloseCircle className="absolute text-lg top-6 right-6" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
