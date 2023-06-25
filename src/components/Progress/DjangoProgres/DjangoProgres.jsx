import React from "react";
import { motion } from "framer-motion";
import { TbBrandDjango } from "react-icons/tb";

const DjangoProgres = () => {
  return (
    <div className="h-16 w-full flex items-center gap-20 justify-center">
      <div className="h-3 w-[30%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden ">
        <motion.div
          className="w-0 flex bg-gradient-to-b rounded-full from-green-500 from-0%  via-green-200 via-32% to-green-500 to-100%"
          animate={{
            width: "70%",
          }}
          transition={{
            duration: 3,
          }}
        />
      </div>
      <div className="font-serif text-5xl font-semibold text-green-400  capitalize">
        <TbBrandDjango />
      </div>
    </div>
  );
};

export default DjangoProgres;
