import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleProps {
  count: number;
}

const ParticleField = ({ count = 2000 }: ParticleProps) => {
  const mesh = useRef<THREE.Points>(null!);

  // Create particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  // Create colors for particles
  const colors = useMemo(() => {
    const temp = [];
    const color1 = new THREE.Color("#4cc9f0");
    const color2 = new THREE.Color("#fca311");
    const color3 = new THREE.Color("#4895ef");

    for (let i = 0; i < count; i++) {
      const mixRatio = Math.random();
      let color;

      if (mixRatio < 0.33) {
        color = color1;
      } else if (mixRatio < 0.66) {
        color = color2;
      } else {
        color = color3;
      }

      temp.push(color.r, color.g, color.b);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      // Rotate particles
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() / 10) * 2;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() / 10) * 1;

      // Animate particles
      const positions = mesh.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] +=
          Math.sin(
            (clock.getElapsedTime() + positions[i] + positions[i + 2]) * 50
          ) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]} // Changed this line
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]} // Changed this line
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        vertexColors
      />
    </points>
  );
};

export default ParticleField;
