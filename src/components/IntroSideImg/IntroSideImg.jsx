import React, { useRef } from "react";
import Lottie from "lottie-react";
// import animationData from "../../img/developer-skills.json";
import animationData from "../../img/development.json";

const IntroSideImg = () => {
  const development = useRef(null);
  return (
    <Lottie
      onComplete={() => {
        development.current?.play();
      }}
      className="w-96"
      loop={true}
      lottieRef={development}
      animationData={animationData}
    />
  );
};

export default IntroSideImg;
