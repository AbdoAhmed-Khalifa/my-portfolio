/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Float, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import { GLTF } from 'three-stdlib';
import React from 'react';

// Define GLTF result type for TypeScript support
type GLTFResult = GLTF & {
  nodes: {
    'React-Logo_Material002_0': Mesh;
  };
  materials: {
    'Material.002': any;
  };
};

interface ReactLogoProps {
  [key: string]: any;
}

const ReactLogoc: React.FC<ReactLogoProps> = props => {
  const { nodes, materials } = useGLTF<GLTFResult>('/models/react.glb');

  return (
    <Float floatIntensity={1}>
      {' '}
      {/* Adds a floating effect to the logo */}
      <group position={[8, 8, 0]} {...props} scale={0.4} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.79, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

// Preload the React logo model for smoother initial loading
useGLTF.preload('/models/react.glb');

export default ReactLogoc;
