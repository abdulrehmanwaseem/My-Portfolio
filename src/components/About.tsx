import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import Avatar from "./Avatar";

const skills = [
  "JavaScript/TypeScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "React Native",
  "NestJS",
  "Electron",
  "Three.js",
  "REST APIs",
  "GraphQL",
  "SQL Databases",
  "Docker",
];
const SkillsScene = () => {
  // Generate evenly distributed positions using Fibonacci sphere
  const positions = useMemo(() => {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const spread = 10; // Controlled spread

    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2; // Range from 1 to -1
      const radius = Math.sqrt(1 - y * y); // Radius at y

      const theta = phi * i; // Golden angle increment

      // Add some controlled randomness to break perfect symmetry
      const jitter = 0.2;
      const jx = (Math.random() - 0.5) * jitter;
      const jy = (Math.random() - 0.5) * jitter;
      const jz = (Math.random() - 0.5) * jitter;

      points.push([
        (radius * Math.cos(theta) + jx) * spread,
        (y + jy) * spread * 0.6, // Flatten vertically a bit
        (radius * Math.sin(theta) + jz) * spread - 6,
      ]);
    }

    return points;
  }, [skills.length]);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 65 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#4895ef" />

      {skills.map((skill, i) => (
        <Skill key={i} position={positions[i]} skill={skill} index={i} />
      ))}
    </Canvas>
  );
};

const Skill = ({
  position,
  skill,
  index,
}: {
  position: [number, number, number];
  skill: string;
  index: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const initialPosition = useRef(position);

  // Different frequencies for different objects
  const frequency = 0.2 + index * 0.01;
  const amplitude = 0.15; // How far it moves from center

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();

      // Rotation with varying speeds
      mesh.current.rotation.x += 0.001 + index * 0.0001;
      mesh.current.rotation.y += 0.002 + index * 0.0001;

      // Orbital movement - each object follows a unique path
      mesh.current.position.x =
        initialPosition.current[0] + Math.sin(time * frequency) * amplitude;
      mesh.current.position.y =
        initialPosition.current[1] +
        Math.cos(time * frequency * 1.3) * amplitude;
      mesh.current.position.z =
        initialPosition.current[2] +
        Math.sin(time * frequency * 0.7) * amplitude;

      // Subtle response to mouse movement
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial
        color="#4895ef"
        wireframe
        emissive="#4895ef"
        emissiveIntensity={0.4}
      />
      <Html
        distanceFactor={25}
        position={[0, 0, 0]}
        className="pointer-events-none" // Prevent HTML interaction from interfering
        occlude // Hide when behind other objects
      >
        <div
          className="bg-secondary/80 backdrop-blur-sm px-2 py-1 text-xs rounded-md whitespace-nowrap text-center"
          style={{
            boxShadow: "0 0 8px rgba(72, 149, 239, 0.2)",
            transform: "translateX(-50%)", // Center horizontally
          }}
        >
          {skill}
        </div>
      </Html>
    </mesh>
  );
};
const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card order-2 lg:order-1"
          >
            <h2 className="heading">About Me</h2>
            <p className="subheading">Full Stack Developer</p>
            <div className="space-y-4 text-text-secondary">
              <p>
                I'm Abdul Rehman, a passionate Full Stack Developer whose
                journey began at age 14 in 9th grade. Now at 18, having
                completed 12th grade, I've transformed that early curiosity into
                expertise in modern web development, specializing in the MERN
                stack while mastering Next.js, NestJS, React Native, and other
                cutting-edge technologies.
              </p>

              <p>
                What some might view as a limitation—my age—I see as my greatest
                advantage. Starting early has given me the freedom to learn,
                experiment, and build a foundation that sets me apart, combining
                practical experience with theoretical knowledge.
              </p>

              <p>
                Currently developing a SaaS Shop Management System and exploring
                System Design, I aim to eventually venture into AI. My mission
                remains clear: creating software that delivers exceptional user
                experiences while constantly adapting to stay at the forefront
                of technology, turning what began as a childhood fascination
                into a lifelong passion.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary border border-accent text-text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 mb-5 order-1 lg:order-2" // Added order classes here
          >
            <div className="relative w-full max-w-xs mx-auto aspect-square rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <Avatar src="/images/me.jpeg" alt="Avatar" />
            </div>

            <div className="hidden lg:block h-[500px]">
              <SkillsScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
