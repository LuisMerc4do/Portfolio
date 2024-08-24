import React, { useState } from "react";
import { motion } from "framer-motion";
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
    image: "/images/project-colearning.webp",
    description:
      "CoLearning is an innovative tech learning platform designed specifically for Colombian learners. It features an integrated IDE, AI-powered assistance, and a responsive design to make learning accessible on any device.",
    link: "#",
  },
  {
    title: "FINANCE APP - a stock management platform",
    category:
      "FULL-STACK • STOCK APP • ASP.NET • REACT • TYPESCRIPT • SQL SERVER",
    image: "/images/project-finapp.webp",
    description:
      "A comprehensive stock management platform built with ASP.NET, React, and TypeScript. It provides real-time stock data, portfolio management, and advanced analytics for informed decision-making.",
    link: "#",
  },
  {
    title: "PDF Reader AI - a saas to chat with any PDF",
    category:
      "FULL-STACK • AI SAAS • NODE.JS • TYPESCRIPT •NEXTJS • POSTGRESQL",
    image: "/images/project-pdfreader.webp",
    description:
      "PDF Reader AI is a cutting-edge SaaS application that allows users to interact with PDF documents using natural language. Built with Node.js, TypeScript, and Next.js, it leverages AI to provide intelligent responses to user queries.",
    link: "#",
  },
  {
    title: "Law Firm APP - a legal firm management System",
    category: "BACKEND • ASP.NET • JWT • IMEMORYCACHE • SERILOG • POSTGRESQL",
    image: "/images/project-lawfirm.webp",
    description:
      "A robust backend solution for law firm management, built with ASP.NET. It features secure authentication with JWT, efficient caching with IMemoryCache, comprehensive logging with Serilog, and reliable data storage with PostgreSQL.",
    link: "#",
  },
];

const ProjectCard = ({ project, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
        <motion.img
          src={project.image}
          alt={project.title}
          className={`w-full h-64 object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
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
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{project.description}</DialogDescription>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md my-4"
        />
        <DialogFooter>
          <Button asChild>
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-2 px-4 container mx-auto mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 font-serif text-center">
          Featured Work
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl text-center mx-auto">
          THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
          SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap -mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </motion.div>
      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default Projects;
