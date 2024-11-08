/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mesh } from 'three';

// Define types for the component's props
interface TargetProps {
  position?: any;
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

const Targetc: React.FC<TargetProps> = props => {
  const targetRef = useRef<Mesh>(null);
  const { scene } = useGLTF('/models/target.gltf');

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]} // Fixed rotation for the target
      scale={1.5} // Fixed scale
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Targetc;
