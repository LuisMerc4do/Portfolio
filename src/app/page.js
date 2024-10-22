"use client";

import React, { useEffect, useState, useCallback, lazy } from "react";
import { motion } from "framer-motion";

const Landing = lazy(() => import("../components/Landing"));
const Description = lazy(() => import("../components/Description"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Experience = lazy(() => import("../components/Experience"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const initScroll = useCallback(async () => {
    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    } catch (error) {
      console.error("Failed to initialize Locomotive Scroll:", error);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
      initScroll();
    }, 100); // Small delay to ensure smooth transition

    return () => clearTimeout(timer);
  }, [initScroll]);

  return (
    <motion.main
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <React.Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <Description />
        <Projects />
        <Skills />
        
        <Experience />
        <Contact />
      </React.Suspense>
    </motion.main>
  );
}
