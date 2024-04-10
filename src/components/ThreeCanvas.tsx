'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function MeshComponent() {
  const fileUrl = '/soulless/soulless.glb';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  const targetOrientation = useRef({ x: 0, y: 0, z: 1 }); // Initialize with initial orientation

  useFrame(({ mouse, viewport }) => {
    const targetX = (mouse.x * viewport.width) / 4.5;
    const targetY = (mouse.y * viewport.height) / 4.5;

    // Smoothly interpolate towards the target orientation
    const lerpAmount = 0.3; // Adjust the lerp amount for desired smoothness
    mesh.current.lookAt(
      targetOrientation.current.x,
      targetOrientation.current.y,
      targetOrientation.current.z
    );

    // Update the target orientation
    targetOrientation.current.x =
      mesh.current.position.x +
      (targetX - mesh.current.position.x) * lerpAmount;
    targetOrientation.current.y =
      mesh.current.position.y +
      (targetY - mesh.current.position.y) * lerpAmount;
  });

  return (
    <>
      <mesh ref={mesh} position={[0, -2.5, -1.5]}>
        <primitive object={gltf.scene} scale={[0.011, 0.011, 0.011]} />
      </mesh>
    </>
  );
}

const ThreeCanvas = () => {
  return (
    <Canvas>
      <directionalLight position={[50, 20, 100]} color="rgb(206, 222, 158)" />
      <ambientLight color="white" />
      <MeshComponent />
    </Canvas>
  );
};

export default ThreeCanvas;
