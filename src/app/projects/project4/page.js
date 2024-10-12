import { CardDescription } from "@/components/ui/card";
import React from "react";

const project4 = () => {
  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription></CardDescription>
        <h2 className="text-6xl font-bold text-center">
          Law Firm App - a legal firm management System
        </h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10 text-justify">
          A robust backend solution for law firm management, built with ASP.NET.
          It features secure authentication with JWT, efficient caching with
          IMemoryCache, comprehensive logging with Serilog, and reliable data
          storage with PostgreSQL. Deployed with azure devops and using UNIT
          TESTING
        </div>
      </div>
    </div>
  );
};

export default project4;
