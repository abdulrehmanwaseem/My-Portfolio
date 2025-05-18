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
    role: "POS Software Developer",
    company: "Self-Employed",
    duration: "Nov 2023 - Apr 2024",
    description: [
      "Built a comprehensive Shop Management System using the PERN stack",
      "Implemented user authentication, invoice management, financial transaction logging, real-time dashboards, and inventory tracking",
      "Developed customer and vendor management with complete transaction history",
      "Created payment status tracking system with automatic updates",
      "Built responsive UI with full CRUD operations via RESTful API",
      "Weekly improvements and new features to enhance usability",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Handontable Excel Table",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    id: 2,
    role: "Web Development Instructor",
    company: "Self-Employed (University-Level-Students  )",
    duration: "May 2024 - Jun 2025",
    description: [
      "Taught HTML, CSS, JavaScript, React.js with hands-on project-based learning",
      "Delivered structured online training sessions focused on full stack web development for university students",
      "Created comprehensive curriculum materials including (JS-LifeCycle) Graph, coding challenges and real-world project assignments that increased student engagement",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Web Development",
    ],
  },
  {
    id: 3,
    role: "Freelancing & IT Skills Trainer",
    company: "E.Zone Academy",
    duration: "Mar 2025 - Jul 2025",
    description: [
      "Conducted in-person workshops and training on how to start and grow a freelancing career",
      "Taught students how to build freelance profiles on platforms like Upwork and Fiverr, write winning proposals, and manage client relationships",
      "Mentored over 25+ aspiring students with individualized feedback, resulting in securing their first client within 3 months",
    ],
    technologies: [
      "Freelancing",
      "Upwork",
      "Fiverr",
      "Client Management",
      "Proposal Writing",
    ],
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
  const width = 18;
  const points = [];
  const amplitude = 1; // Increased from 0.3 to make the curve more pronounced

  // Generate points for the curve
  for (let i = 0; i <= 50; i++) {
    const t = i / 50;
    points.push(
      new THREE.Vector3(
        t * width - width / 2,
        Math.sin(t * Math.PI) * amplitude,
        0
      )
    );
  }

  // Create a smooth curve through the points
  const curve = new THREE.CatmullRomCurve3(points);

  return (
    <mesh>
      <tubeGeometry args={[curve, 100, 0.03, 8, false]} />
      <meshStandardMaterial color="#2088ff" />
    </mesh>
  );
};

const TimelineCanvas = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  const width = 18;
  const amplitude = 1;

  return (
    <Canvas
      camera={{
        position: [0, 0, width > 10 ? 10 : 8], // Move camera back for wider timelines
        fov: 60,
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />

      <TimelinePath />

      {experiences.map((_, index) => {
        const t = index / (experiences.length - 1);
        const x = t * width - width / 2;
        const y = Math.sin(t * Math.PI) * amplitude;

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
                style={{ minWidth: "180px", textAlign: "center" }}
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

const MobileTimeline = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <div className="relative flex flex-col items-center py-4">
      {/* Vertical line */}
      <div className="absolute h-[80%] w-0.5 bg-secondary left-1/2 transform -translate-x-1/2" />

      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 w-full mb-8"
        >
          {/* Timeline node */}
          <div className="flex items-center">
            {/* Left content - date */}
            <div className="pr-4 text-sm text-right w-26 text-text-secondary">
              {experience.duration}
            </div>

            {/* Center dot */}
            <button
              onClick={() => setActiveIndex(index)}
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary border-primary scale-125"
                  : "bg-background border-secondary hover:border-primary"
              }`}
              aria-label={`View ${experience.role} experience`}
            />

            {/* Right content - job title and company */}
            <div
              className={`pl-4 transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary font-medium"
                  : "text-text-primary"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="font-medium cursor-pointer">
                {experience.role}
              </div>
              <div className="text-sm text-text-secondary">
                {experience.company}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
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

        {/* 3D timeline for medium screens and up */}
        <div className="hidden md:block h-80">
          <TimelineCanvas
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* Mobile timeline for small screens */}
        <div className="mb-8 md:hidden">
          <MobileTimeline
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
              className={`w-[0.85rem] h-[0.85rem] rounded-full mx-2 transition-colors border border-text-secondary ${
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
