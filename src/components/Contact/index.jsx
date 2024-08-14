import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import ShimmerButton from "../magicui/shimmer-button";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="text-white flex flex-row items-center justify-center bg-[#141516] relative overflow-hidden"
    >
      <div className="pt-16 w-full max-w-[1800px] bg-[#141516]">
        <div className="border-b border-gray-500 pb-12 sm:pb-16 md:pb-20 lg:pb-[100px] mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] relative">
          <span className="flex items-center sm:flex-row">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[100px] lg:h-[100px] relative rounded-full overflow-hidden mb-4 sm:mb-0">
              <Image
                fill={true}
                alt={"image"}
                src={`/images/background.jpg`}
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-light sm:ml-3 lg:ml-[0.3em]">
              Let's work together
            </h2>
            <br />
          </span>
          <h2 className="text-base text-justify mb-4  md:text-xl font-normal sm:ml-3 lg:ml-[0.3em]">
            <br />
            DRIVEN BY PASSION, I'VE WORKED TIRELESSLY TO CHASE MY DREAMS, NEVER
            SETTLING FOR 'GOOD ENOUGH'. MY HUNGER FOR KNOWLEDGE IS CONSTANT -
            I'M ALWAYS LEARNING, ALWAYS IMPROVING. EVERY DAY IS A NEW
            OPPORTUNITY TO PUSH MY LIMITS AND EXPAND MY SKILLS. I'M COMMITTED TO
            GROWTH, AND MAKING THE MOST OF EVERY OPPORTUNITY THAT COMES MY WAY
          </h2>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 
             sm:left-auto sm:right-8 sm:-bottom-12 
             md:right-16 md:-bottom-16 
             lg:left-[calc(100%-200px)] lg:top-[calc(100%-75px)] lg:transform-none"
          >
            <Link href="https://www.linkedin.com/in/luis-merc4do/">
              <ShimmerButton
                className="lg:left-[calc(100%-200px)] h-16 w-40 mb-10"
                background="rgba(0, 0, 0, 0.8)"
              >
                Get in Touch
              </ShimmerButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row p-4 sm:p-8 md:p-12 lg:p-[20px] text-center">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-[10px] items-end mb-8 sm:mb-0">
            <span className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[15px]">
              <h3 className="text-gray-400 cursor-default font-light text-sm sm:text-base md:text-lg lg:text-[1em] m-0 p-1 sm:p-2 lg:p-[2.5px]">
                Version
              </h3>
              <p className="m-0 p-1 sm:p-2 lg:p-[2.5px] cursor-pointer hover:after:w-full after:content-[''] after:w-0 after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-1/2 after:-translate-x-1/2 after:transition-[width] after:duration-200 after:ease-linear">
                2024 © Edition
              </p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
