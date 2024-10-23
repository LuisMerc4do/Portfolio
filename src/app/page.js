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
  const SpinnerLoader = () => {
    return (
      <div className="w-full rounded-xl h-96 mt-6 flex items-center justify-center overflow-hidden">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-full animate-ping opacity-25"></div>
        </div>
      </div>
    );
  };
  return (
    <motion.main
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <React.Suspense fallback={<SpinnerLoader />}>
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
