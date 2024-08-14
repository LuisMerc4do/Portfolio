import React, { useState } from "react";

const projects = [
  {
    title: "CoLearning -  a tech learning platform for people in Colombia!",
    category: "FULL-STACK APP • LMS • INTEGRATED IDE • AI • RESPONSIVE •",
    image: "/images/project-colearning.webp",
  },
  {
    title: "FINANCE APP - a stock management platform",
    category:
      "FULL-STACK • STOCK APP • ASP.NET • REACT • TYPESCRIPT • SQL SERVER",
    image: "/images/project-finapp.webp",
  },
  {
    title: "PDF Reader AI - a saas to chat with any PDF",
    category:
      "FULL-STACK • AI SAAS • NODE.JS • TYPESCRIPT •NEXTJS • POSTGRESQL",
    image: "/images/project-pdfreader.webp",
  },

  {
    title: "Law Firm APP - a legal firm management System",
    category: "BACKEND • ASP.NET • JWT • IMEMORYCACHE • SERILOG • POSTGRESQL",
    image: "/images/project-lawfirm.webp",
  },
];

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="rounded-lg overflow-hidden hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-64 object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="p-4 bg-gray-100">
          <p className="text-sm text-gray-600">{project.category}</p>
          <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 px-4 container mx-auto mb-10">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Featured Work</h2>
        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl text-justify">
          THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
          SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
