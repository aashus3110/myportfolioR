import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className="flex gap-3 md:gap-8 mx-8 md:mx-12 h-20 items-center font-serif font-semibold md:text-sm text-xs ">
      <div className="flex gap-4 text-sm ">
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="intro"
          spy={true}
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="skills"
          spy={true}
          smooth={true}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="projects"
          spy={true}
          smooth={true}
        >
          Projects
        </Link>
      </div>

      <div className="flex gap-8  ">
        <Link
          className="border hover:border-stone-300 border-white px-4 py-1 cursor-pointer hover:text-slate-300 "
          to="contact"
          spy={true}
          smooth={true}
        >
          Let's Connect
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
