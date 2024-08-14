"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const Preloader = dynamic(() => import("../components/Preloader"), {
  ssr: false,
});
const Landing = dynamic(() => import("../components/Landing"), { ssr: false });
const Description = dynamic(() => import("../components/Description"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

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
      <motion.main
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Landing />
        <Description />
        <Projects />
        <Contact />
      </motion.main>
    </>
  );
}
