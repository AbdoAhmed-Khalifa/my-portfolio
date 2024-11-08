/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { Mesh } from 'three';

interface RingsProps {
  position: any;
}

const Ringsc: React.FC<RingsProps> = ({ position }) => {
  // Store references to each ring mesh
  const refList = useRef<Mesh[]>([]);
  const texture = useTexture('textures/rings.png');

  // Add references to the ring meshes dynamically
  const getRef = useCallback((mesh: Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(() => {
    if (refList.current.length === 0) return;

    // Set initial positions for each ring
    refList.current.forEach(ring => {
      ring.position.set(...position);
    });

    // Apply rotation animation to each ring
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(
        refList.current.map(ring => ring.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        }
      );
  }, [position]);

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Ringsc;
