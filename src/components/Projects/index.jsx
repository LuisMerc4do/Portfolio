import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

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

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className="w-full md:w-1/2 p-4 transition-all duration-500 ease-out"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="rounded-lg overflow-hidden transition-transform duration-300 ease-out hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-64 object-cover transition-opacity duration-300 ${
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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Featured Work</h2>
        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl">
          THESE WORKS REPRESENT MY DEDICATION TO CRAFTING IMPACTFUL DIGITAL
          SOLUTIONS, EACH ONE A STEPPING STONE IN MY RAPID GROWTH AS A DEVELOPER
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
