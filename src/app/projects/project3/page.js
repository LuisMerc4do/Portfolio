"use client";
import React from "react";
import Header from "@/components/Header";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Project3 = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <Header />
      <div className="max-w-4xl mx-auto">
        <CardDescription className="mt-16 md:mt-4 mb-4 text-center">
          Project Description
        </CardDescription>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6">
          Stock Portfolio App - a stock management platform
        </h2>
        <div className="text-base md:text-lg lg:text-xl space-y-6 mb-10 text-justify">
          <p>
            A comprehensive stock management platform built with ASP.NET, React,
            and TypeScript. It provides real-time stock data, portfolio
            management, and advanced analytics for informed decision-making.
            Implementation of Unit Tests and deployed on Azure web apps and
            connected through each other.
          </p>
          <p>
            Full-Stack Finance App project developed with C# ASP.NET Core,
            Microsoft SQL Server, React, TypeScript and Tailwind CSS. Project
            developed from scratch to improve understanding and learning skills
            related to the creation.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Implementation of Entity Framework</li>
            <li>Implementation of Identity for authentication and register</li>
            <li>Await/async implementation</li>
            <li>
              Connection and database management with Microsoft SQL Server
            </li>
            <li>Authorization by role and connection with identity</li>
            <li>Front-end developed with React.js, TypeScript, Tailwind CSS</li>
            <li>Search functionality</li>
            <li>Portfolio functionality</li>
            <li>
              Stock profile, stock data, stock description and dashboard
              functionality
            </li>
            <li>Design guide to test future implementations</li>
            <li>Webpage structure</li>
          </ul>
        </div>
        <Link href="https://github.com/LuisMerc4do/FinanceApi">
          <ShimmerButton
            className="md:h-16 md:w-40 mx-auto my-6"
            background="rgba(0, 0, 0, 0.8)"
          >
            Visit the Site
          </ShimmerButton>
        </Link>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={`/images/stockportfolio/${num}.webp`}
              alt={`Portfolio ${num}`}
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

export default Project3;
