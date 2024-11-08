/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { easing } from 'maath';
import { Group } from 'three';

// Define the props type for the HeroCamera component
interface HeroCameraProps {
  children: ReactNode;
  isMobile: boolean;
}

const HeroCamerac: React.FC<HeroCameraProps> = ({ children, isMobile }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    // Smooth camera position damping
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // If not mobile, apply rotation based on pointer position
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.2}>
      {children}
    </group>
  );
};

export default HeroCamerac;
