/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useMemo } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Detect mobile for performance optimization
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Optimize animation parameters for mobile
  const animationConfig = useMemo(
    () => ({
      duration: isMobile ? 4 : 2.5,
      rotationSpeed: isMobile ? 0.005 : 0.01,
      hoverRotationSpeed: isMobile ? 0.01 : 0.02,
    }),
    [isMobile]
  );

  useGSAP(
    () => {
      // Reduce animation complexity on mobile
      if (isMobile) {
        gsap.to(cubeRef.current.rotation, {
          y: `+=${Math.PI * 2}`,
          duration: animationConfig.duration,
          repeat: -1,
          ease: 'none',
        });
      } else {
        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 0.5,
          })
          .to(cubeRef.current.rotation, {
            y: hovered ? '+=2' : `+=${Math.PI * 2}`,
            x: hovered ? '+=2' : `-=${Math.PI * 2}`,
            duration: animationConfig.duration,
            stagger: {
              each: 0.15,
            },
          });
      }
    },
    { dependencies: [isMobile, hovered, animationConfig] }
  );

  return (
    <Float floatIntensity={isMobile ? 1 : 2} speed={hovered ? 2 : 1}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={isMobile ? 0.5 : 0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => !isMobile && setHovered(true)}
          onPointerLeave={() => !isMobile && setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;
