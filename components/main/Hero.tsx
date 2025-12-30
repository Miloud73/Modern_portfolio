"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full max-md:h-full max-md:w-full ">
      <video
        autoPlay
        muted
        loop
         className="rotate-180 absolute top-[-340px] left-0 z-[-1] w-full h-full object-cover
             max-md:h-[300px] max-md:top-[-150px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
}

export default Hero;
