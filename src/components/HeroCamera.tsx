/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck

import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { easing } from 'maath';
export default function HeroCamera({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile: boolean;
}) {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile) {
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
}
