import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string | null;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Spotlight React Native",
    description:
      "Spotlight is a modern social media app built with React Native and Expo, designed to provide a seamless and engaging user experience. With a focus on simplicity and performance, Spotlight enables users to connect, share, and discover content effortlessly.",
    technologies: ["React Native", "Expo", "Clerk", "Convex", "NativeWind"],
    githubUrl: "https://github.com/abdulrehmanwaseem/Spotlight-React-Native",
    demoUrl:
      "https://expo.dev/accounts/abdulrehman.code1/projects/spot-light/builds/12bb6587-06d8-4e2d-ac69-def0ca923306",
    imageUrl: "/images/spotlight-react-native.png",
  },
  {
    id: 2,
    title: "Shop Management System",
    description:
      "A comprehensive Shop Management System developed using the PERN stack. It features user authentication, invoice management, financial transaction logging, real-time dashboards, payment status tracking, inventory tracking, automatic cash updates and a dynamic dashboard that visualizes key business metrics.",
    technologies: [
      "React",
      "Redux Tool Kit",
      "Handsontable",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    demoUrl: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    imageUrl: "/images/shop-management-system.png",
  },
  {
    id: 3,
    title: "My 3D Character Game (CSGO)",
    description:
      "This game features my own 3D face model as the main character, set on a recreated CS Dust map. It includes a custom 3rd person controller and camera view, offering an immersive and personalized gaming experience with a blend of familiar game environments and unique character design.",
    technologies: [
      "React",
      "R3F",
      "React-Three/drei",
      "React-Three/Rapiar",
      "Typescript",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/My-3D-Character-Game",
    demoUrl: "https://my-3d-character-game.vercel.app/",
    imageUrl: "/images/my-3d-character-game.png",
  },
  {
    id: 4,
    title: "NestJS Microservices Auto Decorators",
    description:
      "It eliminates boilerplate code in NestJS microservice applications by providing intelligent decorators that automatically generate message patterns and handle message sending operations. This package improves developer productivity, reduces errors, and enforces consistent communication patterns across distributed systems.",
    technologies: ["NestJS", "Node.js", "Typesc ript", "ClientProxy"],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/nestjs-microservice-auto-decorators",
    demoUrl:
      "https://www.npmjs.com/package/nestjs-microservice-auto-decorators",
    imageUrl: "/images/nestjs-microservice-auto-decorators.png",
  },
  {
    id: 5,
    title: "Oil Refinery Platform",
    description:
      "This is an interactive 3D visualization demo for an oil refinery platform, designed to showcase the potential of a larger-scale industrial monitoring system. The demo provides a realistic preview of how a comprehensive oil refinery monitoring and management system could function.",
    technologies: [
      "React Three Ocean",
      "React",
      "Three.js",
      "React-Three/postprocessing",
      "React-Three/drei",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/Oil-Refinery-Platform",
    demoUrl: "https://oil-refinery-platform.vercel.app",
    imageUrl: "/images/oil-refinery-platform.png",
  },
  {
    id: 6,
    title: "⚡ React19 Serverside Kit",
    description:
      "A minimal and modern React 19 Server-Side Rendering (SSR) starter using Vite, TypeScript, Tailwind CSS, and Express. This template leverages React 19’s new streaming SSR API with renderToPipeableStream for optimized performance. Perfect for learning and building SSR-based applications with React.",
    technologies: [
      "React 19",
      "Typescript",
      "Express.js",
      "TailwindCSS",
      "Vite",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/React19-Serverside-Kit",
    demoUrl: "https://github.com/abdulrehmanwaseem/React19-Serverside-Kit",
    imageUrl: "/images/react19-serverside-kit.png",
  },
  {
    id: 7,
    title: "Blogs App (NestJS-Prisma-GraphQL-Next.js)",
    description:
      "A full-stack, industry-standard application using NestJS (Prisma + GraphQL) for the backend and Next.js for the frontend. It follows best practices for modular architecture, security, and performance. It follows best practices for modular architecture, performance, and security.",
    technologies: [
      "NestJS",
      "Next.js",
      "GraphQL",
      "2FA",
      "RTK Query",
      "Codegen",
    ],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/NestJS-Prisma-GraphQL-Next.js/",
    demoUrl:
      "https://github.com/abdulrehmanwaseem/NestJS-Prisma-GraphQL-Next.js/",
    imageUrl: "/images/nestjs-prisma-graphql-next.js.png",
  },
  {
    id: 8,
    title: "Electron License Distribution Template",
    description:
      "A modern TypeScript-based template for securely distributing Electron applications with integrated licensing and code protection. This project leverages modern tools like Electron Vite, Keygen.sh, Sentry.io and Bytenode to simplify the process of building, licensing, and securing your application.",
    technologies: [
      "Electron",
      "React",
      "Vite",
      "Keygen.sh",
      "Sentry.io",
      "Bytenode",
    ],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit",
    demoUrl:
      "https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit/archive/refs/tags/Electron-License-Distribution-kit.zip",
    imageUrl: "/images/electron-license-distribution-kit.png",
  },
  {
    id: 9,
    title: "3D-Pipe-Screen-Saver",
    description:
      "A 3D Pipe Screen Saver built using Electron.js, Three.js, and React. This desktop application demonstrates the integration of 3D graphics with desktop application development.",
    technologies: ["Electron.js", "Three.js", "React"],
    githubUrl: "https://github.com/abdulrehmanwaseem/3D-Pipe-Screen-Saver",
    demoUrl: null,
    imageUrl: "",
  },
  {
    id: 10,
    title: "NextJs-Blogs-App",
    description:
      "A comprehensive blogging platform built with Next.js featuring user authentication with Two-Factor Authentication (2FA), role-based access control, and rich text editing.",
    technologies: ["Next.js", "JavaScript"],
    githubUrl: "https://github.com/abdulrehmanwaseem/NextJs-Blogs-App",
    demoUrl: null,
    imageUrl: "",
  },
  {
    id: 11,
    title: "Cloud-File-Management-System",
    description:
      "A full-featured File Management System built with the MERN stack, featuring secure user authentication, file upload and management, and Cloudinary integration for storage.",
    technologies: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/Cloud-File-Management-System",
    demoUrl: null,
    imageUrl: "",
  },
  {
    id: 12,
    title: "Chrome-Color-Customizer",
    description:
      "A simple Chrome extension to customize the color of any webpage, allowing users to change background, text, and element colors for better readability and accessibility.",
    technologies: ["JavaScript", "Chrome Extension"],
    githubUrl: "https://github.com/abdulrehmanwaseem/Chrome-Color-Customizer",
    demoUrl: null,
    imageUrl: "",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading">Featured Projects</h2>
          <p className="max-w-2xl mx-auto subheading">
            A collection of my recent work and personal projects
          </p>
        </motion.div>
        {/* Carousel */}
        <div className="flex flex-col max-w-6xl gap-8 mx-auto md:flex-row md:items-center">
          {/* Left: Image */}
          <div className="relative flex-shrink-0 w-full h-64 overflow-hidden rounded-lg md:w-1/2 md:h-96 bg-gradient-to-tr from-blue-200 to-blue-50">
            <Image
              src={projects[current].imageUrl}
              alt={projects[current].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              priority
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <h3 className="text-xl font-bold">{projects[current].title}</h3>
            <p className="text-gray-300">{projects[current].description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-2">
              {projects[current].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm text-gray-200 rounded bg-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={projects[current].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 transition bg-gray-700 rounded hover:bg-gray-800"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
              {projects[current].demoUrl && (
                <a
                  href={projects[current].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 transition bg-blue-500 rounded hover:bg-blue-600"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            aria-label="Previous project"
            onClick={prevProject}
            className="p-3 transition bg-gray-700 rounded-full hover:bg-gray-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Pagination dots */}
          <div className="flex items-center gap-3 mb-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`w-4 h-4 rounded-full border border-white transition-colors ${
                  current === index ? "bg-blue-400" : "bg-transparent"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next project"
            onClick={nextProject}
            className="p-3 transition bg-gray-700 rounded-full hover:bg-gray-800"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
