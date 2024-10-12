import Header from "@/components/Header";
import { CardDescription } from "../../../components/ui/card";
import React from "react";

const Project3 = () => {
  const post = {
    createdAt: new Date(),
  };
  return (
    <div className="container flex justify-center my-10">
      <Header />
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription></CardDescription>
        <h2 className="text-6xl font-bold text-center">
          Stock Portfolio App - a stock management platform
        </h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10 text-justify mb-10">
          A comprehensive stock management platform built with ASP.NET, React,
          and TypeScript. It provides real-time stock data, portfolio
          management, and advanced analytics for informed decision-making.
          Implementation of Unit Tests and deployed on Azure web apps and
          connected through each other. Full-Stack Finance App project developed
          with c# asp.net core, Microsoft Sql server, React, Typescript and
          tailwindcss. Project developed from scratch to improve understanding
          and learning skills related to the creation - Implementation of Entity
          Framework - Implementation of Identity for authentication and register
          - Await/async implementation - Connection and database management with
          Microsoft Sql server - Authorization by role and connection with
          identity - Front-end developed with react.js, typescript, tailwindcss
          - Search functionality - Portfolio functionality - Stock profile,
          stock data, stop description and dashboard functionality - Design
          guide to test future implementations - Webpage structure
        </div>
        <div className="w-full mx-auto">
          <img src="/images/stockportfolio/1.webp" alt="Portfolio" />
          <img src="/images/stockportfolio/2.webp" alt="Portfolio" />
          <img src="/images/stockportfolio/3.webp" alt="Portfolio" />
          <img src="/images/stockportfolio/4.webp" alt="Portfolio" />
          <img src="/images/stockportfolio/5.webp" alt="Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Project3;
