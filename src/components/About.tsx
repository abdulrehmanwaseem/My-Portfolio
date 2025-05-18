import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

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
  // Generate evenly distributed positions using Fibonacci sphere with final values
  const positions = useMemo(() => {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    // Final values from Leva controls
    const spread = 6.5;
    const verticalFlatten = 0.69;
    const zOffset = 0.0;
    const jitter = 0.2;

    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2; // Range from 1 to -1
      const radius = Math.sqrt(1 - y * y); // Radius at y

      const theta = phi * i; // Golden angle increment

      // Add controlled randomness based on jitter setting
      const jx = (Math.random() - 0.5) * jitter;
      const jy = (Math.random() - 0.5) * jitter;
      const jz = (Math.random() - 0.5) * jitter;

      points.push([
        (radius * Math.cos(theta) + jx) * spread,
        (y + jy) * spread * verticalFlatten,
        (radius * Math.sin(theta) + jz) * spread + zOffset,
      ]);
    }

    return points;
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 65 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#4895ef" />

      {skills.map((skill, i) => (
        <Skill
          key={i}
          position={positions[i] as [number, number, number]}
          skill={skill}
          index={i}
        />
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

  // Update initialPosition when position prop changes
  useEffect(() => {
    initialPosition.current = position;
  }, [position]);

  // Final animation values from Leva controls
  const rotationSpeed = 0.01;
  const amplitude = 0.36;
  const baseFrequency = 0.32;

  // Different frequencies for different objects
  const frequency = baseFrequency + index * 0.01;

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();

      // Rotation with varying speeds
      mesh.current.rotation.x += rotationSpeed + index * 0.0001;
      mesh.current.rotation.y += rotationSpeed * 2 + index * 0.0001;

      // Orbital movement - each object follows a unique path
      mesh.current.position.x =
        initialPosition.current[0] + Math.sin(time * frequency) * amplitude;
      mesh.current.position.y =
        initialPosition.current[1] +
        Math.cos(time * frequency * 1.3) * amplitude;
      mesh.current.position.z =
        initialPosition.current[2] +
        Math.sin(time * frequency * 0.7) * amplitude;
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
        distanceFactor={13}
        position={[0, 0, 0]}
        className="pointer-events-none"
        occlude
      >
        <div
          className="px-2 py-1 text-xs text-center rounded-md bg-secondary/80 backdrop-blur-sm whitespace-nowrap"
          style={{
            boxShadow: "0 0 8px rgba(72, 149, 239, 0.2)",
            transform: "translateX(-50%)",
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
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 card lg:order-1"
          >
            <h2 className="heading">About Me</h2>
            <p className="subheading">Full Stack Developer</p>
            <div className="space-y-4 text-text-secondary">
              <p>
                I&apos;m Abdul Rehman, a passionate Full Stack Developer whose
                journey began at age 14 in 9th grade. Now at 18, having
                completed 12th grade, I&apos;ve transformed that early curiosity
                into expertise in modern web development, specializing in the
                MERN stack while mastering Next.js, NestJS, React Native, and
                other cutting-edge technologies.
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
              <h3 className="mb-4 text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm border rounded-full bg-secondary border-accent text-text-primary"
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
            className="order-1 mt-12 mb-5 lg:order-2"
          >
            <div className="relative w-[320px] h-[320px] max-w-xs mx-auto overflow-hidden border-4 rounded-full shadow-xl aspect-square border-primary">
              <Image
                src="/images/abdul-rehman.jpeg"
                alt="Professional headshot of Abdul Rehman"
                fill
                priority
                quality={90}
                className="object-cover"
              />
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
