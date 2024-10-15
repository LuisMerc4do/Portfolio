"use client";
import React from "react";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Project4 = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="max-w-4xl mx-auto">
        <CardDescription className="mt-16 md:mt-4 mb-4 text-center">
          Project Description
        </CardDescription>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6">
          PDF Reader AI - a saas to chat with any PDF
        </h2>
        <div className="text-base md:text-lg lg:text-xl space-y-6 mb-10 text-justify">
          <p>
            End-to-end SaaS application built with modern technologies and best
            practices. It is designed to be scalable, user-friendly, and
            efficient, providing a solid foundation for any SaaS business.
            Created with Next.js and TypeScript.
          </p>
          <p>
            Complete SaaS Built From Scratch: A robust and scalable SaaS
            application developed from the ground up. Streaming API Responses in
            Real-Time: Real-time streaming of API responses for a dynamic user
            experience. Optimistic UI Updates for a Great UX: Implementing
            optimistic UI updates to provide a smooth and responsive user
            experience.
          </p>
        </div>
        <Link href="https://github.com/LuisMerc4do/chatwithpdfAI">
          <ShimmerButton
            className="md:h-16 md:w-40 mx-auto my-6"
            background="rgba(0, 0, 0, 0.8)"
          >
            Visit the Site
          </ShimmerButton>
        </Link>
        <div className="space-y-4">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/images/chatpdf/${num}.webp`}
              alt={`chatpdf ${num}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        <Link href="/">
          <ShimmerButton
            className="md:h-16 md:w-40 mx-auto my-6"
            background="rgba(0, 0, 0, 0.8)"
          >
            Back To Projects
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

export default Project4;
