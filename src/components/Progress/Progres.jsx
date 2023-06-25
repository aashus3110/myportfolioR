import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Progres = ({ value, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 3 },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView, value]);

  return (
    <div
      className="h-16 w-full flex items-center gap-20 justify-center"
      ref={ref}
    >
      <div className="h-4 w-[70%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden ">
        <motion.div
          className="w-0 flex bg-gradient-to-b rounded-full from-violet-700 from-0%  via-violet-300 via-32% to-violet-700 to-100%"
          animate={controls}
        />
        <span className="text-xs">{text}</span>
      </div>
    </div>
  );
};

export default Progres;
