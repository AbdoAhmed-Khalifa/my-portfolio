/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck

import { useGLTF } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

export default function Target(props) {
  const targetRef = useRef();
  const { scene } = useGLTF('/models/target.gltf');

  // Detect mobile for performance optimization
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Optimize animation parameters for mobile
  const animationConfig = useMemo(
    () => ({
      duration: isMobile ? 2.5 : 1.5,
      scale: isMobile ? 1.2 : 1.5,
    }),
    [isMobile]
  );

  useGSAP(
    () => {
      // Simplify animation on mobile
      if (isMobile) {
        gsap.to(targetRef.current.position, {
          y: targetRef.current.position.y + 0.3,
          duration: animationConfig.duration,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      } else {
        gsap.to(targetRef.current.position, {
          y: targetRef.current.position.y + 0.5,
          duration: animationConfig.duration,
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { dependencies: [isMobile, animationConfig] }
  );

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={animationConfig.scale}
    >
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload('/models/target.gltf');
