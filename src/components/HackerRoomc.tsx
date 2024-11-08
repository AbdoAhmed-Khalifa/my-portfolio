/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useGLTF, useTexture } from '@react-three/drei';
import { Mesh } from 'three';
import { GLTF } from 'three-stdlib';
import React from 'react';

// Define the types for the GLTF model nodes and materials
type GLTFResult = GLTF & {
  nodes: {
    screen_screens_0: Mesh;
    screen_glass_glass_0: Mesh;
    table_table_mat_0_1: Mesh;
    table_table_mat_0_2: Mesh;
    table_table_mat_0_3: Mesh;
    table_table_mat_0_4: Mesh;
    table_table_mat_0_5: Mesh;
    table_table_mat_0_6: Mesh;
    table_table_mat_0_7: Mesh;
    table_table_mat_0_8: Mesh;
    table_table_mat_0_9: Mesh;
    table_table_mat_0_10: Mesh;
    table_table_mat_0_11: Mesh;
    table_table_mat_0_12: Mesh;
  };
  materials: {
    screens: any;
    glass: any;
    table_mat: any;
    computer_mat: any;
    server_mat: any;
    vhsPlayer_mat: any;
    stand_mat: any;
    mat_mat: any;
    arm_mat: any;
    tv_mat: any;
    cables_mat: any;
    props_mat: any;
    ground_mat: any;
    key_mat: any;
  };
};

interface HackerRoomProps {
  [key: string]: any;
}

export default function HackerRoomc(props: HackerRoomProps) {
  const { nodes, materials } = useGLTF<GLTFResult>('/models/hacker-room.glb');
  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      {/* Screen */}
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      {/* Glass */}
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      {/* Desk and Computer Components */}
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      {/* Server, VHS Player, and other components */}
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      {/* TV and cables */}
      <mesh
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      {/* Props, ground, and keys */}
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
}

// Preload the model and textures to improve performance
useGLTF.preload('/models/hacker-room.glb');
useTexture.preload('textures/desk/monitor.png');
useTexture.preload('textures/desk/screen.png');
