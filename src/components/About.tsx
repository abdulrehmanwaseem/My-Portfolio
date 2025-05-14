import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

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
  "Docker"
];

const Skill = ({ position, skill }: { position: [number, number, number], skill: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.003;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <dodecahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial 
        color="#4895ef" 
        wireframe 
        emissive="#4895ef"
        emissiveIntensity={0.2} 
      />
      <Html distanceFactor={15}>
        <div className="bg-secondary px-4 py-2 text-sm rounded-md whitespace-nowrap">
          {skill}
        </div>
      </Html>
    </mesh>
  );
};

const SkillsScene = () => {
  const positions: [number, number, number][] = [];
  const spread = 15;
  
  // Generate positions in a more spread out pattern
  for (let i = 0; i < skills.length; i++) {
    const angle = (i / skills.length) * Math.PI * 2;
    const radius = Math.random() * (spread / 2) + (spread / 2);
    positions.push([
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * spread,
      Math.sin(angle) * radius - 5
    ]);
  }
  
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {skills.map((skill, i) => (
        <Skill key={i} position={positions[i]} skill={skill} />
      ))}
    </Canvas>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <img 
                src="https://raw.githubusercontent.com/abdulrehmanwaseem/abdulrehmanwaseem/main/profile.jpg" 
                alt="Abdul Rehman" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block h-[500px]">
              <SkillsScene />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="heading">About Me</h2>
            <p className="subheading">Full Stack Developer</p>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                I'm a passionate Full Stack Developer with expertise in building modern web applications using cutting-edge technologies. My journey in software development has equipped me with a diverse skill set spanning both frontend and backend development.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have experience with frameworks like Next.js, NestJS, and React Native. I'm passionate about creating seamless user experiences with clean, efficient code.
              </p>
              <p>
                My goal is to build software that not only meets technical requirements but also provides exceptional user experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
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
        </div>
      </div>
    </section>
  );
};

export default About;