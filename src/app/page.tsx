"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ParticleField from "@/components/ParticleField";
import Projects from "@/components/Projects";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  if (loading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <div className="relative">
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Canvas>
            <ParticleField count={250} />
          </Canvas>
        </Suspense>
      </div>

      <Navbar />

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Landing />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}
