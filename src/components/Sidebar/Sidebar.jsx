import React from "react";

const Sidebar = () => {
  return (
    <div className="flex gap-3 md:gap-8 mx-8 md:mx-12 h-20 items-center font-serif font-semibold md:text-sm text-xs ">
      <div className="cursor-pointer hover:text-slate-300 ">Home</div>
      <div className="cursor-pointer hover:text-slate-300 ">Skills</div>
      <div className="cursor-pointer hover:text-slate-300 ">Projects</div>

      <div className="border hover:border-stone-300 border-white px-4 py-1 cursor-pointer hover:text-slate-300 ">
        Let's Connect
      </div>
    </div>
  );
};

export default Sidebar;
