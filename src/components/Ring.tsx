/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback(mesh => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // Detect mobile for performance optimization
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Optimize animation parameters for mobile
  const animationConfig = useMemo(
    () => ({
      duration: isMobile ? 4 : 2.5,
      stagger: isMobile ? 0.3 : 0.15,
      scale: isMobile ? 0.3 : 0.5,
    }),
    [isMobile]
  );

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach(r => {
        r.position.set(position[0], position[1], position[2]);
      });

      // Simplify animations on mobile
      if (isMobile) {
        gsap.to(
          refList.current.map(r => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            duration: animationConfig.duration,
            repeat: -1,
            ease: 'none',
          }
        );
      } else {
        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 0.5,
          })
          .to(
            refList.current.map(r => r.rotation),
            {
              y: `+=${Math.PI * 2}`,
              x: `-=${Math.PI * 2}`,
              duration: animationConfig.duration,
              stagger: {
                each: animationConfig.stagger,
              },
            }
          );
      }
    },
    {
      dependencies: [position, isMobile, animationConfig],
    }
  );

  return (
    <Center>
      <group scale={animationConfig.scale}>
        {Array.from({ length: isMobile ? 2 : 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
