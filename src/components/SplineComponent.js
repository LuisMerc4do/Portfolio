"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [splineApp, setSplineApp] = useState(null);

  // Handle successful load
  const onLoad = (splineApp) => {
    setSplineApp(splineApp);
    setIsLoading(false);
  };

  // Handle loading errors
  const onError = (error) => {
    console.error("Spline loading error:", error);
    setHasError(true);
    setIsLoading(false);
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      if (splineApp) {
        // Cleanup Spline instance if needed
        splineApp.dispose?.();
      }
    };
  }, [splineApp]);

  // If there's an error, show error state
  if (hasError) {
    return (
      <div className="w-full h-full rounded-xl bg-black/80 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <p className="mb-3">Failed to load 3D model</p>
          <button
            onClick={() => {
              setHasError(false);
              setIsLoading(true);
            }}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin border-t-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-25"></div>
            </div>
            <p className="text-white">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {/* Spline component */}
      <Spline
        scene="https://prod.spline.design/HcAIsMw00zxxmAsz/scene.splinecode"
        className="rounded-xl max-h-96 h-screen shadow-2xl"
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
}
