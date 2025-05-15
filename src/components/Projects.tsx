import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/abdulrehmanwaseem/ecommerce-platform",
    demoUrl: "#",
    imageUrl:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates and team permissions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/abdulrehmanwaseem/task-management",
    imageUrl:
      "https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking social media performance across multiple platforms.",
    technologies: ["React", "D3.js", "Firebase", "Material UI"],
    githubUrl: "https://github.com/abdulrehmanwaseem/social-dashboard",
    demoUrl: "#",
    imageUrl:
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Healthcare Appointment App",
    description:
      "A mobile app for scheduling healthcare appointments and managing medical records.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/abdulrehmanwaseem/healthcare-app",
    imageUrl:
      "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "End-to-end encrypted messaging application with group chat functionality.",
    technologies: ["Socket.io", "React", "Express", "MongoDB", "WebRTC"],
    githubUrl: "https://github.com/abdulrehmanwaseem/chat-application",
    demoUrl: "#",
    imageUrl:
      "https://images.pexels.com/photos/2882553/pexels-photo-2882553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Code Collaboration Platform",
    description:
      "A platform for developers to collaborate on code in real-time with integrated version control.",
    technologies: ["Next.js", "WebSockets", "Monaco Editor", "Docker"],
    githubUrl: "https://github.com/abdulrehmanwaseem/code-collab",
    imageUrl:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative group rounded-lg overflow-hidden bg-secondary h-full ${
        hovered ? "shadow-lg ring-1 ring-primary/20" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-text-primary">
          {project.title}
        </h3>
        <p className="text-text-secondary mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-accent/20 text-text-primary rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-text-primary hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5 mr-1" />
            <span>Code</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text-primary hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading">Featured Projects</h2>
          <p className="subheading max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abdulrehmanwaseem"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center justify-center mx-auto w-fit"
          >
            <Code className="w-5 h-5 mr-2" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
