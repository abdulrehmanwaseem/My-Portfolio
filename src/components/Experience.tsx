import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechNova",
    duration: "2023 - Present",
    description: [
      "Lead the development of a major e-commerce platform serving 100K+ monthly users",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries resulting in 60% faster page loads",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "WebSolutions Inc.",
    duration: "2021 - 2023",
    description: [
      "Developed and maintained multiple client web applications",
      "Created RESTful APIs and microservices architecture",
      "Implemented authentication systems and security best practices",
      "Collaborated with design team to create responsive UI components",
    ],
    technologies: ["React", "Express", "PostgreSQL", "TypeScript", "Redis"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Creations",
    duration: "2019 - 2021",
    description: [
      "Built interactive user interfaces using React and Redux",
      "Worked with design team to implement pixel-perfect layouts",
      "Optimized application performance and loading times",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: ["React", "Redux", "SASS", "Webpack", "Jest"],
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "StartupLaunch",
    duration: "2018 - 2019",
    description: [
      "Assisted in developing frontend components for web applications",
      "Participated in daily stand-ups and agile development processes",
      "Fixed bugs and implemented new features",
      "Learned and applied best practices in web development",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
  },
];

const ExperienceNode = ({
  position,
  isActive,
  onClick,
  index,
}: {
  position: [number, number, number];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => {
  const nodeRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.position.y =
        position[1] +
        Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.05;
    }
  });

  return (
    <mesh ref={nodeRef} position={position} onClick={onClick}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial
        color={isActive ? "#fca311" : "#4895ef"}
        emissive={isActive ? "#fca311" : "#4895ef"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const TimelinePath = () => {
  const pathRef = useRef<THREE.Line>(null!);
  const points = [];

  for (let i = 0; i <= 50; i++) {
    const t = i / 50;
    points.push(new THREE.Vector3(t * 12 - 4, Math.sin(t * Math.PI) * 0.3, 0));
  }

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line ref={pathRef} geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#4895ef" linewidth={2} />
    </line>
  );
};

const TimelineCanvas = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />

      <TimelinePath />

      {experiences.map((_, index) => {
        const t = index / (experiences.length - 1);
        const x = t * 12 - 4;
        const y = Math.sin(t * Math.PI) * 0.3;

        return (
          <group key={index}>
            <ExperienceNode
              position={[x, y, 0]}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              index={index}
            />
            <Html position={[x, y + 0.8, 0]} center>
              <div
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-sm rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-background scale-110"
                    : "bg-secondary text-text-primary hover:bg-secondary/80"
                }`}
                style={{ minWidth: "140px", textAlign: "center" }}
              >
                {experiences[index].duration}
              </div>
            </Html>
          </group>
        );
      })}
    </Canvas>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <section id="experience" className="section">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading">Professional Journey</h2>
          <p className="max-w-2xl mx-auto subheading">
            My experience and career milestones
          </p>
        </motion.div>

        <div className="mb-16 h-80">
          <TimelineCanvas
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <motion.div
          key={activeExperience.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto card"
        >
          <div className="flex flex-col items-start justify-between mb-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary">
                {activeExperience.role}
              </h3>
              <p className="text-primary">{activeExperience.company}</p>
            </div>
            <p className="mt-2 text-text-secondary md:mt-0">
              {activeExperience.duration}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="mb-2 text-lg font-semibold text-text-primary">
              Responsibilities:
            </h4>
            <ul className="space-y-2 list-disc list-inside text-text-secondary">
              {activeExperience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-semibold text-text-primary">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeExperience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-accent/20 text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                activeIndex === index ? "bg-primary" : "bg-secondary"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
