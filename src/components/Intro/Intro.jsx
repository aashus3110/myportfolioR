import React from "react";
import { motion } from "framer-motion";
import IntroSideImg from "../IntroSideImg/IntroSideImg";

const Intro = () => {
  return (
    <div className="flex justify-evenly flex-wrap items-center h-[80vh]">
      <div className="flex flex-col text-4xl font-serif font-bold">
        <motion.h1
          animate={{ x: [250, 350, 50], opacity: 1, scale: 0.8 }}
          transition={{
            duration: 3,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2, color: "gray" }}
          whileTap={{ scale: 3, color: "gray" }}
        >
          Hye, I'am Aashutosh Singh
        </motion.h1>
      </div>
      <IntroSideImg />
    </div>
  );
};

export default Intro;
