import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
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
    title: "📱 Spotlight React Native",
    description:
      "Spotlight is a modern social media app built with React Native and Expo, designed to provide a seamless and engaging user experience. With a focus on simplicity and performance, Spotlight enables users to connect, share, and discover content effortlessly with beautifully designed interface.",
    technologies: ["React Native", "Expo", "Clerk", "Convex", "NativeWind"],
    githubUrl: "https://github.com/abdulrehmanwaseem/Spotlight-React-Native",
    demoUrl:
      "https://expo.dev/accounts/abdulrehman.code1/projects/spot-light/builds/12bb6587-06d8-4e2d-ac69-def0ca923306",
    imageUrl: "/images/spotlight-react-native.png",
  },
  {
    id: 2,
    title: "🎮 My 3D Character Game (CSGO)",
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
    id: 3,
    title: "🌀 3D Pipe Screen Saver",
    description:
      "A 3D Pipe Screen Saver (Windows 95) built using Electron.js, Three.js, and React, powered by the Electron Vite build tool. This dynamic desktop application generates mesmerizing, evolving 3D pipe structures, taking you back to the nostalgic Windows 95 screensaver era with a modern touch.",
    technologies: ["Electron.js", "Three.js", "React", "Typescript", "Vite"],
    githubUrl: "https://github.com/abdulrehmanwaseem/3D-Pipe-Screen-Saver",
    demoUrl:
      "https://github.com/abdulrehmanwaseem/3D-Pipe-Screen-Saver/releases/download/3dScreenSaver/3D.Pipe.Screen.Saver.Setup.1.1.0.exe",
    imageUrl: "/images/3d-pipe-screen-saver.png",
  },
  {
    id: 4,
    title: "📝 Blogs App (NestJS-GraphQL-Next.js)",
    description:
      "A full-stack, industry-standard application using NestJS (Prisma + GraphQL) for the backend and Next.js for the frontend. Performant API layer. Security is enforced with JWT-based authentication and optional two-factor authentication (2FA) and seamless QR-code for Google Authenticator. It follows secure architecture.",
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
    id: 5,
    title: "🏭 Oil Refinery Platform",
    description:
      "This is an interactive 3D visualization demo for an oil refinery platform, designed to showcase the potential of a larger-scale industrial monitoring system. The demo provides a realistic preview of how a comprehensive oil refinery monitoring and management system could function. Featuring realistic water physics and dynamic lighting.",
    technologies: [
      "React",
      "Three.js",
      "React Three Ocean",
      "React-Three/postprocessing",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/Oil-Refinery-Platform",
    demoUrl: "https://oil-refinery-platform.vercel.app",
    imageUrl: "/images/oil-refinery-platform.png",
  },
  {
    id: 6,
    title: "⚡ React19 Serverside Kit",
    description:
      "A minimal and modern React 19 Server-Side Rendering (SSR) starter using Vite, TypeScript, Tailwind CSS, and Express. This template leverages React 19's new streaming SSR API with renderToPipeableStream for optimized performance. Perfect for learning and building SSR-based applications with React.",
    technologies: [
      "React 19",
      "Typescript",
      "Express.js",
      "Tailwind CSS",
      "Vite",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/React19-Serverside-Kit",
    demoUrl: "https://github.com/abdulrehmanwaseem/React19-Serverside-Kit",
    imageUrl: "/images/react19-serverside-kit.png",
  },
  {
    id: 7,
    title: "🛒 Shop Management System",
    description:
      "A comprehensive Shop Management System developed using the PERN stack. It features user authentication, invoice management, financial transaction logging, real-time dashboards, payment status tracking, inventory tracking, automatic cash updates and a dynamic dashboard that visualizes key business metrics.",
    technologies: [
      "React",
      "Redux Tool Kit",
      "Handsontable",
      "Express.js",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    demoUrl: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    imageUrl: "/images/shop-management-system.png",
  },
  {
    id: 8,
    title: "🚀 NestJS Microservices Auto Decorators",
    description:
      "It eliminates boilerplate code in NestJS microservice applications by providing intelligent decorators that automatically generate message patterns and handle message sending operations. This package improves developer productivity, reduces errors, and enforces consistent communication patterns across distributed systems.",
    technologies: ["NestJS", "Node.js", "Typescript", "ClientProxy"],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/nestjs-microservice-auto-decorators",
    demoUrl:
      "https://www.npmjs.com/package/nestjs-microservice-auto-decorators",
    imageUrl: "/images/nestjs-microservice-auto-decorators.png",
  },
  {
    id: 9,
    title: "🔐 Electron License Distribution Template",
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
    id: 10,
    title: "☁️ Cloud File Management System",
    description:
      "A full-featured File Management System built with the MERN stack. Features include secure user authentication, file upload and management, Cloudinary integration for storage, Redis-based caching, and email notifications via Nodemailer. The system also includes a RESTful API for CRUD operations and efficient file handling.",
    technologies: [
      "MERN",
      "RTK Query",
      "BullMQ",
      "Redis",
      "Nodemailer",
      "Cloudinary",
    ],
    githubUrl:
      "https://github.com/abdulrehmanwaseem/Cloud-File-Management-System",
    demoUrl: "https://cloud-file-management-system.vercel.app",
    imageUrl: "/images/cloud-file-management-system.png",
  },
  {
    id: 11,
    title: "✍️ Blogger",
    description:
      "A comprehensive blogging platform built with Next.js featuring user authentication with Two-Factor Authentication (2FA), role-based access control, and rich text editing. It utilizes PostgreSQL with Prisma ORM for data management and Cloudinary for image storage, supporting commenting, ratings, and content moderation.",
    technologies: [
      "Next.js",
      "Cloudinary",
      "NextAuth",
      "React Hook Form",
      "Prisma",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/NextJs-Blogs-App",
    demoUrl: "https://github.com/abdulrehmanwaseem/NextJs-Blogs-App",
    imageUrl: "/images/blogger.png",
  },
  {
    id: 12,
    title: "🎨 Chrome Color Customizer",
    description:
      "A simple Chrome extension to customize the color of any webpage. With this extension, users can change the background, text, and element colors for better readability, accessibility, or style. Great for dark mode enthusiasts or anyone looking to personalize their browsing experience.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Manifest.json",
      "Typescript",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/Chrome-Color-Customizer",
    demoUrl:
      "https://github.com/abdulrehmanwaseem/Chrome-Webpage-Colorizer-Extension/releases/download/Webpage-Colorizer/webpage-colorizer-extention.zip",
    imageUrl: "/images/chrome-color-customizer.png",
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
    <section id="projects" className="section">
      <div className="w-full max-w-6xl mx-auto">
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

        <div className="flex flex-col max-w-6xl gap-8 mx-auto md:flex-row md:items-center">
          {/* Left: Image */}
          {/* Image Container with Exact Transparency Checkerboard Pattern */}
          <div className="relative flex-shrink-0 w-full h-64 overflow-hidden rounded-lg md:w-1/2 md:h-96 border border-text-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            {/* Dark Gray Checkerboard Background (exact match to image) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, #2a2a2a 25%, transparent 25%), 
        linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #2a2a2a 75%), 
        linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)`,
                backgroundColor: "#3a3a3a",
                backgroundSize: "16px 16px",
                backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
              }}
            ></div>

            {/* Subtle vignette effect to match the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

            {/* Actual Image */}
            <Image
              key={projects[current].imageUrl}
              src={projects[current].imageUrl}
              priority
              fill
              alt={projects[current].title}
              className="relative z-10 object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-5 md:w-1/2">
            {/* Pagination dots */}
            <div className="flex items-center gap-3 mb-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-[0.90rem] h-[0.90rem] md:w-5 md:h-5 rounded-full border border-text-secondary transition-all duration-300 ${
                    current === index
                      ? "bg-primary scale-125 border-primary"
                      : "bg-transparent hover:border-white/80 hover:scale-105"
                  }`}
                />
              ))}
            </div>
            {/* Title with animation */}
            <motion.h3
              key={projects[current].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold"
            >
              {projects[current].title}
            </motion.h3>
            <motion.p
              key={`desc-${projects[current].id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-text-secondary"
            >
              {projects[current].description}
            </motion.p>
            {/* Technologies with hover effect */}
            <div className="flex flex-wrap gap-2 mt-3">
              {" "}
              {/* Increased margin-top */}
              {projects[current].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm transition-all duration-200 rounded bg-secondary text-text-primary hover:bg-secondary/80 hover:scale-105 hover:shadow-md"
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
                className="flex items-center gap-2 transition-transform duration-200 btn hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
              {projects[current].demoUrl && (
                <a
                  href={projects[current].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent border btn border-primary text-primary hover:bg-primary hover:text-background transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
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
            className="p-3 transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-110 active:scale-95 hover:shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next project"
            onClick={nextProject}
            className="p-3 transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-110 active:scale-95 hover:shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
