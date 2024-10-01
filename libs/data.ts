import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

export const experiencesData = [
  {
    title: "Bachelor of Software Engineering (Artificial Intelligence)",
    location: "Sydney, AUS",
    description:
      "Pursuing a degree in Software Engineering with a focus on AI, maintaining a High Distinction average. Demonstrating exceptional academic performance while adapting to a new cultural environment. Actively engaging in AI projects, hackathons, and industry networking events.",
    icon: React.createElement(GraduationCap),
    date: "Expected 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "StockShipping, Spain / Col - Hybrid",
    description:
      "I changed my job for a more challeging one focused more on full-stack applications using React, ASP.NET, TypeScript, Tailwind CSS, and Node.js. I learned a lot about SQL, ASP.NET and cloud computing, focusing more on storage, app services and DevOps",
    icon: React.createElement(Briefcase),
    date: "05/2021 - 09/2022",
  },
  {
    title: "Front-End Developer",
    location: "Prensarank, SPAIN - Remote",
    description:
      "I was a self-taugth Web developer, and I Started working for a remote company in Spain where I Built dynamic web applications using React, TypeScript, Javascript, HTML, CSS, and modern front-end frameworks like Tailwind CSS, and libraries. At the same time I continued learning and improving my backend skills.",
    icon: React.createElement(Briefcase),
    date: "01/2020 - 09/2021",
  },
  {
    title: "Bachelor of Law",
    location: "Barranquilla, COL",
    description:
      "Completed a rigorous 5-year law degree program, demonstrating exceptional academic prowess by securing a full scholarship and graduating in the top 3% of the class. Developed strong analytical, research, and communication skills applicable to complex problem-solving in various fields.",
    icon: React.createElement(GraduationCap),
    date: "2021",
  },
] as const;
export const skillsData = [
  "C#",
  "ASP.NET",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node",
  "Git",
  "Tailwind CSS",
  "RESTful APIs",
  "Redux",
  "MongoDB",
  "PostgreSQL",
  "Microsoft SQL",
  "Framer Motion",
  "Azure",
  "AWS",
] as const;
