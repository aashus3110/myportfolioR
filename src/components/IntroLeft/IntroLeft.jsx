import React from "react";
import Dev from "../../img/Dev.png";

const IntroLeft = () => {
  return (
    <div className="bg-violet-900 my-12 md:mt-32">
      <img
        className="h-80 w-80 mx-auto lg:h-[30rem] lg:w-[35rem]"
        src={Dev}
        alt=""
      />
    </div>
  );
};

export default IntroLeft;
