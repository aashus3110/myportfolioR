import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroSideImg from "../IntroSideImg/IntroSideImg";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const [show1Typewriter, setShow1Typewriter] = useState(false);
  const [show2Typewriter, setShow2Typewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow1Typewriter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow2Typewriter(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-evenly mt-24 md:mt-0 flex-wrap items-center h-[80vh]">
      <div className="flex flex-col text-4xl font-serif font-bold">
        <motion.div
          className="md:block hidden"
          animate={{ x: [-200, -50], opacity: 1, scale: 0.8 }}
          transition={{
            duration: 3,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2, color: "gray" }}
          whileTap={{ scale: 3, color: "gray" }}
        >
          Hye, I'am
        </motion.div>
        <motion.div
          className="md:hidden"
          animate={{
            rotate: [0, 360],
            opacity: [0, 0.5, 1],
            scale: 0.8,
          }}
          transition={{
            duration: 3,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2, color: "gray" }}
          whileTap={{ scale: 3, color: "gray" }}
        >
          Hye, I'am
        </motion.div>
        {show1Typewriter && (
          <Typewriter
            className=""
            options={{
              strings: "Aashutosh Singh",
              autoStart: true,
              loop: false,
              delay: 50,
              pauseFor: 2500,
            }}
          />
        )}
        <span className="text-shadow-2 text-[1.5rem] capitalize md:ml-12 md:mb-11 md:text-4xl text-justify font-medium m-4 text-slate-600 font-serif ">
          {show2Typewriter && (
            <Typewriter
              options={{
                strings: [
                  "i design and develop",
                  " Full Stack Website",
                  "UI UX Designer",
                  "React Developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
              }}
            />
          )}
        </span>
      </div>
      <IntroSideImg />
    </div>
  );
};

export default Intro;
