"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./nav";
import Magnetic from "../../common/Magnetic";

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Remove the ScrollTrigger animation for hiding the header
  }, []);

  return (
    <>
      <header
        ref={header}
        className="fixed top-0 left-0 right-0 flex justify-between items-center z-50 w-full text-black p-3 md:px-10 font-normalh-14"
      >
        <div className="flex cursor-pointer group">
          <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg]">
            ©
          </p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[250%]">
              - Luis
            </p>
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] group-hover:-translate-x-[125px]">
              Mercado
            </p>
            <p className="absolute left-[120px] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] group-hover:-translate-x-[125px]">
              Software Engineer
            </p>
          </div>
        </div>
        <nav className="flex items-center  box-border bg-[#f0f1fa] bg-opacity-10 backdrop-blur-md rounded-lg">
          {["Work", "About", "Contact"].map((item) => (
            <Magnetic key={item}>
              <div className="flex flex-col relative z-10 p-2 md:p-[15px] cursor-pointer group">
                <a className="relative z-20">{item}</a>
                <div className="absolute w-[5px] h-[5px] bottom-0 md:top-[45px] left-1/2 bg-black rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
              </div>
            </Magnetic>
          ))}
        </nav>
      </header>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
