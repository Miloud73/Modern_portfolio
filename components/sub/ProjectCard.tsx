"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ src, title, github, demo }: Props) => {
  const handleUnavailable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Not uploaded yet!");
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>

        <div className="flex gap-3">
          {/* Live Demo Button */}
          <a
            href={demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={!demo ? handleUnavailable : undefined}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-300
              ${
                demo
                  ? "bg-cyan-500 text-white hover:bg-cyan-600"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
          >
            Live Demo
          </a>

          {/* GitHub Button */}
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={!github ? handleUnavailable : undefined}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-300
              ${
                github
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
