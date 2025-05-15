import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Laptop,
  LayoutGrid,
  Server,
  Code,
  Box,
  FileDown,
} from "lucide-react";

const TechIcons = () => {
  const icons = [
    { Icon: Database, label: "MongoDB" },
    { Icon: Database, label: "PostgreSQL" },
    { Icon: Server, label: "Express" },
    { Icon: LayoutGrid, label: "React" },
    { Icon: Server, label: "Node.js" },
    { Icon: Globe, label: "Next.js" },
    { Icon: Server, label: "NestJS" },
    { Icon: LayoutGrid, label: "React Native" },
    { Icon: Laptop, label: "Electron" },
    { Icon: Box, label: "Three.js" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="flex flex-col items-center animate-float"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-center justify-center w-12 h-12 p-3 rounded-full shadow-lg md:w-16 md:h-16 bg-secondary">
            <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <span className="mt-2 text-sm text-text-secondary">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

const Landing = () => {
  return (
    <section id="home" className="relative pt-24 overflow-hidden section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="heading"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-8 text-lg md:text-lg text-text-secondary"
          >
            Crafting multiplatform applications with modern cutting-edge
            technology
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="flex items-center gap-2 btn">
              <Code className="w-5 h-5" />
              <span>View Projects</span>
            </a>
            <a
              href="/docs/Abdul_Rehman_CV.pdf"
              download="Abdul_Rehman_CV.pdf"
              className="flex items-center gap-2 bg-transparent border btn border-primary text-primary hover:bg-primary hover:text-background"
              onClick={(e) => {
                // Optional: Track download event
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "cv_download", {
                    event_category: "engagement",
                    event_label: "CV Download",
                  });
                }
              }}
            >
              <FileDown className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </motion.div>

          <TechIcons />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute transform -translate-x-1/2 bottom-10 left-1/2"
      >
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-text-primary">
          <div className="w-1 h-3 mt-2 rounded-full bg-text-primary animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
