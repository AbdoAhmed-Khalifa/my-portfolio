/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck

import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef, useMemo } from 'react';
import { easing } from 'maath';

export default function HeroCamera({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile: boolean;
}) {
  const groupRef = useRef();

  // Optimize animation parameters for mobile
  const animationConfig = useMemo(
    () => ({
      damping: isMobile ? 0.5 : 0.25, // Slower damping on mobile
      pointerSensitivity: isMobile ? 0 : 1, // Disable pointer tracking on mobile
    }),
    [isMobile]
  );

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [0, 0, 20],
      animationConfig.damping,
      delta
    );

    // Only apply pointer-based rotation on desktop
    if (!isMobile && animationConfig.pointerSensitivity > 0) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        animationConfig.damping,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.8 : 1.2}>
      {children}
    </group>
  );
}
