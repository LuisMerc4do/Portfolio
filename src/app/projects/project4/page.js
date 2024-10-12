import { CardDescription } from "@/components/ui/card";
import React from "react";

const project4 = () => {
  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription></CardDescription>
        <h2 className="text-6xl font-bold text-center">
          PDF Reader AI - a saas to chat with any PDF
        </h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10 text-justify">
          End-to-end SaaS application built with modern technologies and best
          practices. It is designed to be scalable, user-friendly, and
          efficient, providing a solid foundation for any SaaS business. Create
          with nextjs and typescript. Complete SaaS Built From Scratch: A robust
          and scalable SaaS application developed from the ground up. Streaming
          API Responses in Real-Time: Real-time streaming of API responses for a
          dynamic user experience.Optimistic UI Updates for a Great UX:
          Implementing optimistic UI updates to provide a smooth and responsive
          user experience.
        </div>
        <div className="w-full mx-auto">
          <img src="/images/chatpdf/3.webp" alt="chatpdf" />
          <img src="/images/chatpdf/2.webp" alt="chatpdf" />
          <img src="/images/chatpdf/1.webp" alt="chatpdf" />
        </div>
      </div>
    </div>
  );
};

export default project4;
