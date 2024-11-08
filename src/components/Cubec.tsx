/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useRef, useState } from 'react';
import { Mesh } from 'three';
import gsap from 'gsap';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

// Define types for GLTF result to improve TypeScript support
type GLTFResult = GLTF & {
  nodes: {
    Cube: Mesh;
  };
};

interface CubeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Cubec: React.FC<CubeProps> = ({ ...props }) => {
  const { nodes } = useGLTF<GLTFResult>('models/cube.glb'); // Load model
  const texture = useTexture('textures/cube.png'); // Load texture
  const cubeRef = useRef<Mesh>(null); // Reference to the cube
  const [hovered, setHovered] = useState(false); // State for hover effect

  // Animation for rotation using GSAP, controlled by hover state
  useFrame(() => {
    if (cubeRef.current) {
      gsap.to(cubeRef.current.rotation, {
        y: hovered
          ? cubeRef.current.rotation.y + 0.02
          : cubeRef.current.rotation.y + 0.01,
        x: hovered
          ? cubeRef.current.rotation.x + 0.02
          : cubeRef.current.rotation.x - 0.01,
        duration: 2.5,
      });
    }
  });

  return (
    <Float floatIntensity={2} speed={hovered ? 2 : 1}>
      {' '}
      {/* Float effect */}
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)} // Set hovered state on enter
          onPointerLeave={() => setHovered(false)} // Reset hovered state on leave
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload models and textures to improve performance
useGLTF.preload('models/cube.glb');
useTexture.preload('textures/cube.png');

export default Cubec;
