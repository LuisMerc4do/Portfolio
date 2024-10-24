"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "../../../libs/data";

export default function Experience() {
  return (
    <section className="py-4 mb-10">
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 font-serif">
          My Experience
        </h2>
        <h2 className="text-sm md:text-base text-gray-600 max-w-2xl text-center mx-auto">
          A UNIQUE BLEND OF CRITICAL THINKING AND INNOVATIVE APPROACHES FORGING
          MY DISTINCTIVE PATH{" "}
          <span className="italic underline text-center mx-auto">
            .I HAVE BEEN PROGRAMMING SINCE I AM 15. WHILE STUDYING I ALWAYS
            WORKED AS A FREELANCER FOR SMALL COMPANIES AND MEDIUM COMPANIES
          </span>
        </h2>
      </div>
      <VerticalTimeline lineColor="#f0f1fa">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            visible={true}
            key={index}
            contentStyle={{
              background: "#f0f1fa",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "#f0f1fa",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
