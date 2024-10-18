import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CoLearning - a tech learning platform for people in Colombia!",
    category:
      "FULL-STACK • LMS • INTEGRATED IDE • AI • RESPONSIVE • REACTJS • NEXTJS •",
    image: "/images/projectcolearning.jpg",
    description:
      "CoLearning is an innovative tech learning platform designed specifically for Colombian learners. It features an integrated IDE, AI-powered assistance, and a responsive design to make learning accessible on any device. CoLearning is a free online technology learning platform designed to reduce educational inequalities and offer new growth opportunities to all Colombians.",
    link: "/projects/project1",
  },
  {
    title: "AI Powered Sales Assistant SaaS, Email Marketing and ChatBot",
    category:
      "FULLSTACK • ASP.NET • REACTJS • TYPESCRIPT • NEXTJS • AZURE DEVOPS •  POSTGRESQL",
    image: "/images/project-lawfirm.jpg",
    description:
      "A robust Full-Stack solution for chatbot assistant, with management portal, email marketing, chats handling and external integrations. built with ASP.NET and Next.js, shadcn, tailwind CSS It features secure authentication with JWT, efficient caching with IMemoryCache, comprehensive logging with Serilog, and reliable data storage with PostgreSQL.",
    link: "/images/chatbot/1.webp",
  },
  {
    title: "Stock Portfolio App - a stock management platform",
    category:
      "FULL-STACK • ASP.NET • REACT • TYPESCRIPT • SQL SERVER • UNIT TESTS • AZURE WEB APPS ",
    image: "/images/project-finapp.jpg",
    description:
      "A comprehensive stock management platform built with ASP.NET, React, and TypeScript. It provides real-time stock data, portfolio management, and advanced analytics for informed decision-making. Implementation of Unit Tests and deployed on Azure web apps and connected through each other.",
    link: "/projects/project3",
  },

  {
    title: "PDF Reader AI - a saas to chat with any PDF",
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
    <motion.div
      className="w-full md:w-1/2 p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={project.link}>
        <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4 bg-gray-100">
            <p className="text-sm text-gray-600">{project.category}</p>
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
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
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
