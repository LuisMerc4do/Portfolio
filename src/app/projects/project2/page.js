"use client";
import React from "react";
import Header from "@/components/Header";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Project2 = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <Header />
      <div className="max-w-4xl mx-auto">
        <CardDescription className="mt-16 md:mt-4 mb-4 text-center">
          Project Description
        </CardDescription>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-6">
          AI Powered Sales Assistant SaaS, Email Marketing and ChatBot
        </h2>
        <div className="text-base md:text-lg lg:text-xl space-y-6 mb-10 text-justify">
          <p>
            A robust Full-Stack solution for chatbot assistant, with management
            portal, email marketing, chats handling and external integrations.
            built with ASP.NET and Next.js, shadcn, tailwind CSS It features
            secure authentication with JWT, efficient caching with IMemoryCache,
            comprehensive logging with Serilog, and reliable data storage with
            PostgreSQL.
          </p>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={`/images/chatbot/${num}.webp`}
              alt={`Chatbot ${num}`}
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

export default Project2;
