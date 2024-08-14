import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";

export default function RoundedButton({ children, className, ...attributes }) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[140px] lg:h-[140px] bg-[#1a31fbe7] text-white rounded-full flex items-center justify-center cursor-pointer overflow-hidden ${className}`}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <span className="m-0 text-lg lg:text-[16px] z-[2] relative font-bold">
          {children}
        </span>
        <div
          ref={circle}
          className="w-full h-[150%] absolute rounded-[50%] top-full bg-[#1a2ffb]"
        ></div>
      </div>
    </Magnetic>
  );
}
