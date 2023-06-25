import React from "react";
import { motion } from "framer-motion";
import Python from "../../../img/python.png";
const PythonProgres = () => {
  return (
    <div className="h-16 w-full flex items-center gap-20 justify-center">
      <div className="h-3 w-[30%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden">
        <motion.div
          className="w-0 flex bg-gradient-to-b rounded-full from-blue-500 via-white to-yellow-300"
          animate={{
            width: "50%",
          }}
          transition={{
            duration: 3,
          }}
        />
      </div>
      <div class="h-12 w-12 ">
        <img src={Python} alt="" />
      </div>
    </div>
  );
};

export default PythonProgres;
