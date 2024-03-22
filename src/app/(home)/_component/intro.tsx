import React from "react";

import { BackgroundBeams } from "@/components/aceternity/background-beam";
import IntroText from "./intro-text-";

const Intro = () => {
  return (
    <div className="h-[40rem] mb-[160px] w-full relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4 w-full mt-48">
        <IntroText />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Intro;
