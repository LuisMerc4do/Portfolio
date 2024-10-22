import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../Header";
import ShimmerButton from "../magicui/shimmer-button";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-7xl rounded-xl h-96 mt-6 bg-black flex items-center justify-center overflow-hidden text-white">
          <div className="text-center">
            <p className="text-xl mb-4">
              Something went wrong loading the 3D model
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Enhanced Spinner with Progress
const EnhancedSpinner = ({ progress }) => {
  return (
    <div className="w-full max-w-7xl rounded-xl h-96 mt-6 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-25"></div>
      </div>
      <div className="text-white text-sm">
        Loading 3D Model... {progress ? `${Math.round(progress)}%` : ""}
      </div>
    </div>
  );
};

// Optimized Spline Component Wrapper
const OptimizedSplineComponent = lazy(() =>
  import("../SplineComponent").then((module) => {
    return new Promise((resolve) => {
      // Artificial delay to prevent flash of loading state
      setTimeout(() => {
        resolve(module);
      }, 100);
    });
  })
);

const CornerMarker = ({ position }) => (
  <div className={`hidden md:block fixed ${position} m-4 text-3xl`}>+</div>
);

const LusionInspiredLanding = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isModelVisible, setIsModelVisible] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
      }
      setLoadingProgress(progress);
    }, 200);

    return () => clearInterval(interval);
  }, []);

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

        <ErrorBoundary>
          <Suspense fallback={<EnhancedSpinner progress={loadingProgress} />}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full max-w-6xl rounded-xl h-72 mt-6 bg-black flex items-center justify-center mb-10"
                onViewportEnter={() => setIsModelVisible(true)}
                onViewportLeave={() => setIsModelVisible(false)}
              >
                {isModelVisible && <OptimizedSplineComponent />}
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>

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
