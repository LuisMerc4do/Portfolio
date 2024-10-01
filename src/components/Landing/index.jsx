import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../Header";
import ShimmerButton from "../magicui/shimmer-button";

const SplineComponent = lazy(() => import("../SplineComponent"));

const SkeletonLoader = () => (
  <div className="w-full max-w-7xl rounded-xl h-96 mt-6 bg-black flex items-center justify-center overflow-hidden">
    <div className="w-3/4 h-2/3 bg-black rounded animate-pulse"></div>
  </div>
);

const CornerMarker = ({ position }) => (
  <div className={`hidden md:block fixed ${position} m-4 text-3xl`}>+</div>
);

const LusionInspiredLanding = () => {
  return (
    <div className="min-h-screen bg-[#f0f1fa] text-black">
      <Header />
      <main className="flex flex-col items-center justify-center px-6 py-24 md:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-7xl max-w-5xl text-black mb-3"
        >
          <span className="font-medium font-serif md:text-8xl">
            LUIS MERCADO
          </span>
          <br />
          <span className="font-serif md:text-6xl text-3xl">
            ✦ Software Engineer ✦
          </span>
        </motion.h1>

        <Suspense fallback={<SkeletonLoader />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-9/12 max-w-4xl rounded-xl h-72 mt-6 bg-black flex items-center justify-center mb-10"
          >
            <SplineComponent />
          </motion.div>
        </Suspense>

        <motion.div
          className="text-2xl mb-8 max-w-xs md:max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-3xl font-extrabold font-serif">
            Passionated and Different
          </p>
          <h2 className="font-serif md:mt-5 text-xl md:text-3xl">
            Based in Sydney, Australia
          </h2>
        </motion.div>

        <Link href="https://www.linkedin.com/in/luis-merc4do/">
          <ShimmerButton
            className="md:h-16 md:w-40"
            background="rgba(0, 0, 0, 0.8)"
          >
            Get in Touch
          </ShimmerButton>
        </Link>

        <div className="mt-4 text-sm uppercase tracking-widest">
          SCROLL TO EXPLORE ↓
        </div>
      </main>

      <CornerMarker position="top-0 left-0" />
      <CornerMarker position="top-0 right-0" />
      <CornerMarker position="bottom-0 left-0" />
      <CornerMarker position="bottom-0 right-0" />
    </div>
  );
};

export default LusionInspiredLanding;
