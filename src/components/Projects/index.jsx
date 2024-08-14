import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    category: "WEB • DESIGN • DEVELOPMENT • 3D",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Project Two",
    category: "CONCEPT • 3D ILLUSTRATION • ANIMATION",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Project Three",
    category: "UX/UI • BRANDING • MOBILE APP",
    image: "/path/to/image3.jpg",
  },
  {
    title: "Project Four",
    category: "AR/VR • GAME DEVELOPMENT • 3D MODELING",
    image: "/path/to/image4.jpg",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="w-full md:w-1/2 p-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 bg-gray-100">
        <p className="text-sm text-gray-600">{project.category}</p>
        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => (
  <section className="py-16 px-4 max-w-7xl mx-auto">
    <motion.h2
      className="text-5xl md:text-7xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Featured Work
    </motion.h2>
    <motion.p
      className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
      SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
    </motion.p>
    <div className="flex flex-wrap -mx-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
