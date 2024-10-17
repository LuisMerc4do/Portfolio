"use client";
import React from "react";
import Header from "@/components/Header";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Project1 = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <Header />
      <div className="max-w-4xl mx-auto">
        <CardDescription className="mt-16 md:mt-4 mb-4 text-center">
          Project Description
        </CardDescription>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-6">
          CoLearning - a tech learning platform for underprivileged people in
          Colombia!
        </h2>
        <div className="text-base md:text-lg lg:text-xl space-y-6 mb-10 text-justify">
          <p>
            CoLearning is an innovative tech learning platform designed
            specifically for Colombian learners. It features an integrated IDE,
            AI-powered assistance, and a responsive design to make learning
            accessible on any device. CoLearning is a free online technology
            learning platform designed to reduce educational inequalities and
            offer new growth opportunities to all Colombians.
          </p>
          <p>
            CoLearning represents a new way of thinking about education,
            prioritizing the learning of emerging technologies and their
            application in solving real-world problems. Additionally, it fosters
            innovation and entrepreneurship by providing students with the
            necessary tools to turn their ideas into concrete projects.
          </p>
          <p>
            Developed a comprehensive learning platform using Next.js, React,
            TypeScript, and PostgreSQL. Implemented an Integrated Development
            Environment (IDE) and Test Cases. Implemented AI-powered learning
            features and a complete LMS management system.
          </p>
        </div>
        <Link href="https://colearning.vercel.app/">
          <ShimmerButton
            className="md:h-16 md:w-40 mx-auto my-6"
            background="rgba(0, 0, 0, 0.8)"
          >
            Visit the Site
          </ShimmerButton>
        </Link>
        <div className="space-y-4">
          {[1, 2, 3, 4, 6, 7].map((num) => (
            <img
              key={num}
              src={`/images/colearning/${num}.webp`}
              alt={`Colearning ${num}`}
              className="w-full h-auto"
            />
          ))}
          {[8, 9, 13, 14, 15].map((num) => (
            <img
              key={num}
              src={`/images/colearning/${num}.webp`}
              alt={`Colearning ${num}`}
              className="w-full max-w-md mx-auto h-auto"
            />
          ))}
          {[10, 11, 12, 16].map((num) => (
            <img
              key={num}
              src={`/images/colearning/${num}.webp`}
              alt={`Colearning ${num}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        <Link href="/projects">
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

export default Project1;
