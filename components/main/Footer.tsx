import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a href="https://github.com/Miloud73" className="cursor-pointer">
              <p className="flex flex-row items-center my-[15px] ">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://www.linkedin.com/in/miloud-bendjedda73/"
              className="cursor-pointer"
            >
              <p className="flex flex-row items-center my-[15px] ">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <div className="flex flex-col items-center my-[15px] ">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
              <span className="text-[15px] ml-[6px]">
                contacte.miloud@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; miloud bendjedda 2025. All rights reserved (WebChain Dev 2023
          Inc)
        </div>
      </div>
    </div>
  );
};

export default Footer;