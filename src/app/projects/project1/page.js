import Header from "@/components/Header";
import { CardDescription } from "../../../components/ui/card";
import React from "react";

const Project1 = () => {
  const post = {
    createdAt: new Date(),
  };
  return (
    <div className="container flex justify-center my-10">
      <Header />
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription></CardDescription>
        <h2 className="text-6xl font-bold text-center">
          CoLearning - a tech learning platform for underprivileged people in
          Colombia!
        </h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10 text-justify mb-10">
          CoLearning is an innovative tech learning platform designed
          specifically for Colombian learners. It features an integrated IDE,
          AI-powered assistance, and a responsive design to make learning
          accessible on any device. CoLearning is a free online technology
          learning platform designed to reduce educational inequalities and
          offer new growth opportunities to all Colombians. CoLearning
          represents a new way of thinking about education, prioritizing the
          learning of emerging technologies and their application in solving
          real-world problems. Additionally, it fosters innovation and
          entrepreneurship by providing students with the necessary tools to
          turn their ideas into concrete projects.
          <br />
          <br />
          Developed a comprehensive learning platform using NEXT.js, React,
          Typescript, and PostgreSQL. Implemented an Integrated Development
          Environment (IDE) and Test Cases. Implemented AI-powered learning
          features. And Complete LMS management System
        </div>
        <img src="/images/colearning/1.webp" alt="Colearning" />
        <img src="/images/colearning/2.webp" alt="Colearning" />
        <img src="/images/colearning/3.webp" alt="Colearning" />
        <img src="/images/colearning/4.webp" alt="Colearning" />
        <img src="/images/colearning/6.webp" alt="Colearning" />
        <img src="/images/colearning/7.webp" alt="Colearning" />
        <img
          src="/images/colearning/8.webp"
          alt="Colearning"
          width={400}
          height={200}
          className="mx-auto"
        />
        <img
          src="/images/colearning/9.webp"
          alt="Colearning"
          width={400}
          height={200}
          className="mx-auto"
        />
        <img src="/images/colearning/10.webp" alt="Colearning" />
        <img src="/images/colearning/11.webp" alt="Colearning" />
        <img src="/images/colearning/12.webp" alt="Colearning" />
        <img
          src="/images/colearning/13.webp"
          alt="Colearning"
          width={400}
          height={200}
          className="mx-auto"
        />
        <img
          src="/images/colearning/14.webp"
          alt="Colearning"
          width={400}
          height={200}
          className="mx-auto"
        />
        <img
          src="/images/colearning/15.webp"
          alt="Colearning"
          width={400}
          height={200}
          className="mx-auto"
        />
        <img src="/images/colearning/16.webp" alt="Colearning" />
      </div>
    </div>
  );
};

export default Project1;
