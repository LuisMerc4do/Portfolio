import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

export const experiencesData = [
  {
    title: "Bachelor of Software Engineering (Artificial Intelligence)",
    location: "Sydney, AUS",
    description:
      "Pursuing a degree in Software Engineering with a focus on AI, maintaining a High Distinction average. Demonstrating exceptional academic performance while adapting to a new cultural environment. Actively engaging in AI projects, hackathons, and industry networking events to build a strong foundation for a career in innovative software development.",
    icon: React.createElement(GraduationCap),
    date: "Expected 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "StockShipping, Spain / Remote",
    description:
      "Developed and launched 10+ responsive e-commerce websites using React, ASP.NET, TypeScript, Tailwind CSS, Node.js, and PHP. resulting in a 40% increase in user engagement and a 25% boost in conversion rates. Integrated front-end applications (React) with back-end services and APIs, ensuring seamless operation and enhancing customer experience across 10+ client e-commerce/CRUD platforms and over 10+ Landing pages. Converted client-provided business models into dynamic digital web pages, optimizing the transition process to increase efficiency by 40% and ensuring accurate representation of each brand. Simultaneously managed projects for multiple business-driven brands, ensuring timely delivery and adherence to quality standards. Introduced and implemented CI/CD pipelines using Azure DevOps and Azure App Services, minimizing production errors by 40%, and streamlining the process of deploying web applications to the cloud. Maintained back-end services using Node.js, ASP.NET, PHP, and various SQL databases including PostgreSQL, Microsoft SQL Server, and MySQL, ensuring robust and secure application architecture, resulting in improved efficiency and adherence to good programming practices. ",
    icon: React.createElement(Briefcase),
    date: "05/2021 - 09/2022",
  },
  {
    title: "Front-End Developer",
    location: "Space Creativos Agency, COL",
    description:
      "Built dynamic web applications using React, TypeScript, Javascript, HTML, CSS, and modern front-end frameworks like Tailwind CSS, and libraries, resulting in a 40% improvement in load times and a 35% increase in user engagement across client projects. Implemented SEO best practices and integrated meaningful website designs, boosting traffic and conversions for 30+ local businesses. Collaborated closely with the back-end team to deliver high-quality, responsive web solutions that met client requirements and industry standards and ensured seamless integration and improved performance across all projects. Optimizing front-end performance through code splitting, lazy load, efficient rendering techniques, and the application of best practices of coding, achieving a consistent 95+ lighthouse score",
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
  "ASP.NET",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Azure",
  "AWS",
] as const;
