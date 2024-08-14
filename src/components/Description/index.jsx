import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import RoundedButton from "../../common/RoundedButton";
import Link from "next/link";

export const slideUp = {
  initial: { y: "100%" },
  open: (i) => ({ y: "0%", transition: { duration: 0.5, delay: 0.01 * i } }),
  closed: { y: "100%", transition: { duration: 0.5 } },
};

export const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Description() {
  const phrase =
    "I'm  Luis Mercado, a Software Engineer and Full Stack Developer on a mission to create impactful digital solutions. With expertise in Next.js, React, ASP.NET, TypeScript, and Python, but my true strength lies in my insatiable appetite for learning.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="px-4 sm:px-8 md:px-16 lg:px-[200px] mt-16 sm:mt-24 md:mt-32 lg:mt-[200px] flex justify-center mb-12 sm:mb-20 md:mb-34 lg:mb-36"
    >
      <div className="max-w-[1400px] flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[50px] relative">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight lg:leading-[1.3] m-0">
          {phrase.split(" ").map((word, index) => (
            <span
              key={index}
              className="relative overflow-hidden inline-flex mr-[3px] text-justify"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="text-base sm:text-lg md:text-xl lg:text-[18px] w-full lg:w-4/5 font-light m-0"
        >
          BRIDGING PASSION AND INNOVATION IN THE DIGITAL REALM. READY TO
          REDEFINE WHAT'S POSSIBLE.
        </motion.p>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="mt-8 lg:mt-0 mx-auto"
        >
          <Link href="https://www.linkedin.com/in/luis-merc4do/">
            <RoundedButton className="lg:left-[calc(100%-200px)]">
              Contact Me
            </RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
