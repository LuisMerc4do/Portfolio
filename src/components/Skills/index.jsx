"use client";

import React from "react";
import { skillsData } from "../../../libs/data";
import StackIcon from "tech-stack-icons";
export default function Skills() {
  return (
    <section
      id="skills"
      className={`py-16 px-4 container mx-auto mt-4 mb-2 transition-all duration-500 ease-out opacity-100 translate-y-0""
      }`}
    >
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 font-serif">
          My Skills
        </h2>
        <p className="text-sm md:text-base ml-auto text-gray-600 mb-8 max-w-2xl mx-auto">
          HARNESSING THE POWER OF DIVERSE TECHNOLOGIES: A COMPREHENSIVE SKILLSET
          BUILT THROUGH RELENTLESS CURIOSITY, PRACTICAL APPLICATION, AND A
          PASSION FOR PUSHING DIGITAL BOUNDARIES
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-4xl mx-auto">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border text-black rounded-xl px-5 py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
