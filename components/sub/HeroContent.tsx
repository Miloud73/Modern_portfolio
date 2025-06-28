"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] max-md:p-0 "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b]  opacity-[0.9] max-md:ml-[13px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text text-[10px]">
            React.js | React Native | Next.js Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto max-md:w-full max-md:px-2.5 max-md:text-3xl max-md:text-center"
        >
          <span className="flex flex-col gap-6">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-md:text-[12px] max-md:ml-[13px]"
        >
          I&apos;m a dedicated full-stack developer with a strong focus on
          front-end development, specializing in Next.js, React.js, and React
          Native. I build modern, responsive web and mobile applications with
          clean, efficient code. With experience across both front-end and
          back-end technologies, I deliver complete, scalable solutions from UI
          to database.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] max-md:max-w-[50%]  max-md:ml-[25%]"
        >
          Learn more!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex flex-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          width={650}
          height={650}
          alt="work icons"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
