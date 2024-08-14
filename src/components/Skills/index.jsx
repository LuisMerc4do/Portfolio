"use client";

import React, { useRef, useEffect, useState } from "react";
import { skillsData } from "../../../libs/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className={`max-w-3xl items-center mx-auto top-0 text-center mb-6 transition-all duration-500 ease-out opacity-100 translate-y-0""
      }`}
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-4">My Skills</h2>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
        SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
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
