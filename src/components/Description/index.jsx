import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import BlurFade from "../../../components/world-pull-up";
import ShimmerButton from "../magicui/shimmer-button";

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
  const description = useRef(null);

  return (
    <div
      ref={description}
      className="px-4 sm:px-8 md:px-16 lg:px-[200px] mt-16 flex justify-center mb-8"
    >
      <div className="max-w-[1400px] flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[50px] relative">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight lg:leading-[1.3] m-0 text-justify font-serif">
          <span>
            I&apos;m Luis Mercado, a Software Engineer and Full Stack Developer
            on a mission to create impactful digital solutions. With expertise
            in ASP.NET, React, Next.Js, TypeScript, Microsoft Azure and Python,
            but my true strength lies in my insatiable appetite for learning.
          </span>
        </span>
        <div className="text-base sm:text-lg md:text-xl lg:text-[18px] w-full lg:w-4/5 font-light text-center mt-2">
          BRIDGING PASSION AND INNOVATION IN THE DIGITAL REALM. READY TO
          REDEFINE WHAT&apos;S POSSIBLE.
          <Link href="https://www.linkedin.com/in/luis-merc4do/">
            <ShimmerButton className="mt-4 mx-auto">Contact Me</ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
