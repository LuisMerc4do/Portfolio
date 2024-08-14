"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("../components/Preloader"), {
  ssr: false,
});

const Landing = dynamic(() => import("../components/Landing"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Description = dynamic(() => import("../components/Description"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Features = dynamic(() => import("../components/Experience"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Contact = dynamic(() => import("../components/Contact"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const initScroll = useCallback(async () => {
    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    } catch (error) {
      console.error("Failed to initialize Locomotive Scroll:", error);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
      initScroll();
    }
  }, [isLoading, initScroll]);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
        <motion.main
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Suspense fallback={<div>Loading Landing...</div>}>
            <Landing />
          </Suspense>
          <Suspense fallback={<div>Loading Description...</div>}>
            <Description />
          </Suspense>
          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div>Loading Features...</div>}>
            <Features />
          </Suspense>
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </motion.main>
      </Suspense>
    </>
  );
}
