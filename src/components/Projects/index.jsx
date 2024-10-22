import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "CoLearning",
    subtitle: "- a tech learning platform for people in Colombia!",
    category:
      "FULL-STACK • LMS • INTEGRATED IDE • AI • RESPONSIVE • REACTJS • NEXTJS •",
    image: "/images/projectcolearning.jpg",
    description:
      "CoLearning is an innovative tech learning platform designed specifically for Colombian learners. It features an integrated IDE, AI-powered assistance, and a responsive design to make learning accessible on any device. CoLearning is a free online technology learning platform designed to reduce educational inequalities and offer new growth opportunities to all Colombians.",
    link: "/projects/project1",
  },
  {
    title: "AI Powered Sales Assistant",
    subtitle: "- SaaS, Email Marketing and ChatBot",
    category:
      "FULLSTACK • ASP.NET • REACTJS • TYPESCRIPT • NEXTJS • AZURE DEVOPS •  POSTGRESQL",
    image: "/images/chatbot/1.webp",
    description:
      "A robust Full-Stack solution for chatbot assistant, with management portal, email marketing, chats handling and external integrations. built with ASP.NET and Next.js, shadcn, tailwind CSS It features secure authentication with JWT, efficient caching with IMemoryCache, comprehensive logging with Serilog, and reliable data storage with PostgreSQL.",
    link: "/projects/project2",
  },
  {
    title: "Stock Portfolio App",
    subtitle: "- a Stock management platform",
    category:
      "FULL-STACK • ASP.NET • REACT • TYPESCRIPT • SQL SERVER • UNIT TESTS • AZURE WEB APPS ",
    image: "/images/project-finapp.jpg",
    description:
      "A comprehensive stock management platform built with ASP.NET, React, and TypeScript. It provides real-time stock data, portfolio management, and advanced analytics for informed decision-making. Implementation of Unit Tests and deployed on Azure web apps and connected through each other.",
    link: "/projects/project3",
  },

  {
    title: "PDF Reader AI",
    subtitle: "- a saas to chat with any PDF",
    category:
      "FULL-STACK • AI SAAS • NODE.JS • TYPESCRIPT • NEXTJS • POSTGRESQL",
    image: "/images/project-pdfreader.jpg",
    description:
      "PDF Reader AI is a cutting-edge SaaS application that allows users to interact with PDF documents using natural language. Built with Node.js, TypeScript, and Next.js, it leverages AI to provide intelligent responses to user queries.",
    link: "/projects/project4",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link} className="w-full p-4  md:max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="mt-2 text-3xl md:text-4xl ">
          <a className="font-bold">{project.title}</a>
          {project.subtitle}
        </h3>
        <p className="text-sm text-gray-600 mb-6">{project.category}</p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h2 className="mt-6 md:text-right underline font-thin">
        View Project <ArrowRight className="inline-block size-4" />
      </h2>
    </Link>
  );
};

const Projects = () => {
  return (
    <section className="py-2 px-4 container mx-auto mb-10">
      <h2 className="text-5xl md:text-7xl font-bold mb-4 font-serif text-center">
        Featured Work
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl text-center mx-auto">
        THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
        SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
      </p>
      <div className="flex flex-wrap -mx-4 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
