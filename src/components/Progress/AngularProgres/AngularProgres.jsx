import React from "react";
import { motion } from "framer-motion";
import { SiAngular } from "react-icons/si";

const AngularProgres = () => {
  return (
    <div className="h-16 w-full flex items-center gap-20 justify-center">
      <div className="h-3 w-[30%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden ">
        <motion.div
          className="w-0 flex bg-gradient-to-b rounded-full from-red-500 from-0%  via-red-200 via-32% to-red-500 to-100%"
          animate={{
            width: "40%",
          }}
          transition={{
            duration: 3,
          }}
        />
      </div>
      <div className="font-serif text-5xl font-semibold text-red-500  capitalize">
        <SiAngular />
      </div>
    </div>
  );
};

export default AngularProgres;
