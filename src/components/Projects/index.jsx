import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CoLearning - a tech learning platform for people in Colombia!",
    category: "FULL-STACK APP • LMS • INTEGRATED IDE • AI • RESPONSIVE •",
    image: "/images/projectcolearning.jpg",
    images: [
      "/images/colearning/1.webp",
      "/images/colearning/2.webp",
      "/images/colearning/3.webp",
      "/images/colearning/4.webp",
      "/images/colearning/6.webp",
      "/images/colearning/7.webp",
      "/images/colearning/8.webp",
      "/images/colearning/9.webp",
      "/images/colearning/10.webp",
      "/images/colearning/11.webp",
      "/images/colearning/12.webp",
      "/images/colearning/13.webp",
      "/images/colearning/14.webp",
      "/images/colearning/15.webp",
      "/images/colearning/16.webp",
    ],
    description:
      "CoLearning is an innovative tech learning platform designed specifically for Colombian learners. It features an integrated IDE, AI-powered assistance, and a responsive design to make learning accessible on any device. CoLearning is a free online technology learning platform designed to reduce educational inequalities and offer new growth opportunities to all Colombians. CoLearning represents a new way of thinking about education, prioritizing the learning of emerging technologies and their application in solving real-world problems. Additionally, it fosters innovation and entrepreneurship by providing students with the necessary tools to turn their ideas into concrete projects.",
    link: "https://colearning.vercel.app/",
  },
  {
    title: "Stock Portfolio App - a stock management platform",
    category:
      "FULL-STACK • STOCK APP • ASP.NET • REACT • TYPESCRIPT • SQL SERVER • UNIT TESTS • AZURE WEB APPS ",
    image: "/images/project-finapp.jpg",
    description:
      "A comprehensive stock management platform built with ASP.NET, React, and TypeScript. It provides real-time stock data, portfolio management, and advanced analytics for informed decision-making. Implementation of Unit Tests and deployed on Azure web apps and connected through each other. Full-Stack Finance App project developed with c# asp.net core, Microsoft Sql server, React, Typescript and tailwindcss. Project developed from scratch to improve understanding and learning skills related to the creation  - Implementation of Entity Framework - Implementation of Identity for authentication and register - Await/async implementation - Connection and database management with Microsoft Sql server - Authorization by role and connection with identity - Front-end developed with react.js, typescript, tailwindcss - Search functionality - Portfolio functionality - Stock profile, stock data, stop description and dashboard functionality - Design guide to test future implementations  - Webpage structure",
    link: "https://github.com/LuisMerc4do/FinanceApi",
    videoUrl: "https://www.youtube.com/embed/MiKL_1Ep6C8?si=fPAjS8h4wMlUmVSw",
  },
  {
    title: "PDF Reader AI - a saas to chat with any PDF",
    category:
      "FULL-STACK • AI SAAS • NODE.JS • TYPESCRIPT • NEXTJS • POSTGRESQL",
    image: "/images/project-pdfreader.jpg",
    images: [
      "/images/project-pdfreader.jpg",
      "/images/pdfreader2.jpg",
      "/images/pdfreader3.jpg",
    ],
    description:
      "PDF Reader AI is a cutting-edge SaaS application that allows users to interact with PDF documents using natural language. Built with Node.js, TypeScript, and Next.js, it leverages AI to provide intelligent responses to user queries.",
    link: "https://github.com/LuisMerc4do/chatwithpdfAI",
    videoUrl: "https://www.youtube.com/embed/POJXu9v_L3I?si=cIprLhzly-tJw7r8",
  },
  {
    title: "Law Firm App - a legal firm management System",
    category:
      "BACKEND • ASP.NET • JWT • IMEMORYCACHE • SERILOG • UNIT TESTS • AZURE DEVOPS •  POSTGRESQL",
    image: "/images/project-lawfirm.jpg",
    images: [
      "/images/project-lawfirm.jpg",
      "/images/lawfirm2.jpg",
      "/images/lawfirm3.jpg",
    ],
    description:
      "A robust backend solution for law firm management, built with ASP.NET. It features secure authentication with JWT, efficient caching with IMemoryCache, comprehensive logging with Serilog, and reliable data storage with PostgreSQL. Deployed with azure devops and using UNIT TESTING",
    link: "https://github.com/LuisMerc4do/law-firm-system",
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="w-full md:w-1/2 p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={() => onClick(project)}
      >
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
    </motion.div>
  );
};

const ProjectDialog = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  }, [project]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  }, [project]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          {project.description}
        </DialogDescription>
        <div className="relative">
          {project.videoUrl ? (
            <iframe
              className="w-full h-[300px] md:h-[500px]"
              src={project.videoUrl}
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                width={800}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
              {project.images.length > 1 && (
                <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                  <Button
                    onClick={prevImage}
                    className="bg-black bg-opacity-50 text-white"
                    aria-label="Previous image"
                  >
                    &#8249;
                  </Button>
                  <Button
                    onClick={nextImage}
                    className="bg-black bg-opacity-50 text-white"
                    aria-label="Next image"
                  >
                    &#8250;
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
        <DialogFooter className="mt-4">
          <Button asChild className="w-full md:w-auto">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);

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
          <ProjectCard
            key={index}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default Projects;
