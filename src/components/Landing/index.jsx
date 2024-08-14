import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import SplineComponent from "../splinecomponent";
const SkeletonLoader = () => (
  <div className="w-full max-w-7xl rounded-xl h-96 mt-6 bg-black flex items-center justify-center overflow-hidden">
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="w-3/4 h-2/3 bg-black rounded animate-pulse"></div>
    </div>
  </div>
);
const LusionInspiredLanding = () => {
  return (
    <div className="min-h-screen bg-[#f0f1fa] text-black font-sans">
      <Header />
      <main className="flex flex-col items-center justify-center px-6 py-24 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold max-w-3xl text-black mb-3"
        >
          Luis Mercado
          <br />
        </motion.h1>
        <motion.p
          className="text-3xl mb-8 max-w-xs md:max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          PASSIONATED & DIFFERENT ✦SOFTWARE ENGINEER✦ <br />
          <span>BASED IN SYDNEY</span>
        </motion.p>
        {/* 3D Objects Placeholder */}
        <Suspense fallback={<SkeletonLoader />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-7xl rounded-xl h-96 mt-6 bg-black flex items-center justify-center"
          >
            <SplineComponent />
          </motion.div>
        </Suspense>

        {/* Scroll Indicator */}
        <div className="mt-10 text-sm uppercase tracking-widest">
          SCROLL TO EXPLORE ↓
        </div>
      </main>

      {/* Corner Markers */}
      <div className="hidden md:fixed top-0 left-0 m-4 text-3xl">+</div>
      <div className="hidden md:fixed top-0 right-0 m-4 text-3xl">+</div>
      <div className="fixed bottom-0 left-0 m-4 text-3xl">+</div>
      <div className="fixed bottom-0 right-0 m-4 text-3xl">+</div>
    </div>
  );
};

export default LusionInspiredLanding;
