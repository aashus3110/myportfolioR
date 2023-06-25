import React from "react";
import { motion } from "framer-motion";
import { GrReactjs } from "react-icons/gr";

const ReactProgres = (value) => {
  return (
    <div className="h-16 w-full flex items-center gap-20 justify-center">
      <div className="h-3 w-[30%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden ">
        <motion.div
          className="w-0 flex bg-gradient-to-b rounded-full from-cyan-300 from-0%  via-cyan-100 via-32% to-cyan-300 to-100%"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 3,
          }}
        />
      </div>
      <div className="font-serif text-5xl font-semibold text-cyan-300  capitalize">
        <GrReactjs />
      </div>
    </div>
  );
};

export default ReactProgres;
