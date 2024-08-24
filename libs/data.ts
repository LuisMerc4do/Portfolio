import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

export const experiencesData = [
  {
    title: "Bachelor of Software Engineering (Artificial Intelligence)",
    location: "Sydney, AUS",
    description:
      "Pursuing a degree in Software Engineering with a focus on AI, [maintaining a High Distinction average]. Demonstrating exceptional academic performance while adapting to a new cultural environment. Actively engaging in AI projects, hackathons, and industry networking events to build a strong foundation for a career in innovative software development.",
    icon: React.createElement(GraduationCap),
    date: "Expected 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "StockShipping, Spain / Remote",
    description:
      "Spearheaded the development of 25+ high-performance e-commerce platforms using React, TypeScript, Tailwind CSS, Node.js, and PHP. Implemented robust API integrations, resulting in a 25% improvement in data processing efficiency. Optimized the client onboarding process, reducing transition time by 40% while ensuring pixel-perfect representation of brand identities. Introduced automated testing, leading to a 30% reduction in post-launch bugs and a 20% increase in customer satisfaction scores.",
    icon: React.createElement(Briefcase),
    date: "05/2021 - 09/2022",
  },
  {
    title: "Front-End Developer",
    location: "Space Creativos Agency, COL",
    description:
      "Led the front-end development of 30+ web applications using React, TypeScript, and modern frameworks, resulting in a 30% boost in user engagement and a 25% decrease in bounce rates. Implemented performance optimization techniques that improved page load times by 40%, directly contributing to a 20% increase in conversion rates for client websites. Championed the adoption of SEO best practices, resulting in an average 50% improvement in search engine rankings for key client keywords.",
    icon: React.createElement(Briefcase),
    date: "01/2020 - 09/2021",
  },
  {
    title: "Bachelor of Law",
    location: "Barranquilla, COL",
    description:
      "Completed a rigorous 5-year law degree program, demonstrating exceptional academic prowess by securing a full scholarship and graduating in the top 3% of the class. Developed strong analytical, research, and communication skills applicable to complex problem-solving in various fields. Actively participated in moot court competitions and legal clinics, honing practical legal skills and a detail-oriented approach that transfers well to software development and project management.",
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
