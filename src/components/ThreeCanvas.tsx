'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function MeshComponent() {
  const fileUrl = '/soulless/scene.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    // mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const ThreeCanvas = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <MeshComponent />
    </Canvas>
  );
};

export default ThreeCanvas;
