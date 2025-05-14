import { useRef, useEffect } from "react";
import { Canvas as ThreeCanvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import ParticleField from "./ParticleField";

function BackgroundScene() {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useEffect(() => {
    // Set initial camera position
    cameraRef.current.position.set(0, 0, 5);
  }, []);

  useFrame(({ mouse, viewport }) => {
    // Subtle camera movement based on mouse position
    const x = (mouse.x * viewport.width) / 50;
    const y = (mouse.y * viewport.height) / 50;

    cameraRef.current.position.x += (x - cameraRef.current.position.x) * 0.05;
    cameraRef.current.position.y += (-y - cameraRef.current.position.y) * 0.05;
    cameraRef.current.lookAt(0, 0, 0);
  });

  return null;
}

const Canvas = () => {
  return (
    <ThreeCanvas
      shadows
      dpr={[1, 2]}
      style={{ position: "absolute", top: 0, left: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <PerspectiveCamera makeDefault />
      <BackgroundScene />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      <ParticleField count={500} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} visible={false}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Float>
    </ThreeCanvas>
  );
};

export default Canvas;
