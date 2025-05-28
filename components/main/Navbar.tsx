"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/70 backdrop-blur-md z-[50] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#aboute_me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin "
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 ">
            Next.js | React.js Dev
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between gap-25 border border-[#7042f861] bg-[#0300145e]/60 mr-[15px] px-[20px] py-[8px] rounded-full text-gary-200 ">
            <a href="#about_me" className="cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer ">
              Skills
            </a>
            <a href="#project" className="cursor-pointer ">
              Project
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 ">
            {Socials.map((social)=>(
            <Image src={social.src} key={social.name} width={24} height={24} alt={social.name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
