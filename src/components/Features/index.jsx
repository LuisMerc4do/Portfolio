"use client";

import { useRef, useEffect, useState } from "react";

export default function Home() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const initialMaskSize = 80;
  const targetMaskSize = 3000;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.maskSize = `${
      initialMaskSize + maskSizeProgress
    }%`;
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="mb-[10vh]">
      <div ref={container} className="relative h-[300vh] bg-white">
        <div
          ref={stickyMask}
          className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
          style={{
            maskImage: 'url("/medias/mask.svg")',
            maskPosition: "52.35% center",
            maskRepeat: "no-repeat",
            maskSize: "80%",
          }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
          >
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl"
            >
              ▶
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
