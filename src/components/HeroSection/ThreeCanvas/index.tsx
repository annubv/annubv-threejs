'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Color, Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function MeshComponent() {
  const fileUrl = '/sol.glb';
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
        <primitive object={gltf.scene} scale={[0.013, 0.012, 0.012]} />
      </mesh>
    </>
  );
}

interface IThreeCanvas {
  parentRefs: Array<any>;
  canvClass: string;
  hovElement: string;
}

const ThreeCanvas = ({ parentRefs, canvClass, hovElement }: IThreeCanvas) => {
  const [col, setCol] = useState(new Color('#c0c0c0'));

  useEffect(() => {
    if (hovElement === 'name') {
      setCol(new Color('gold'));
    } else if (hovElement === 'qr') {
      setCol(new Color('red'));
    } else {
      setCol(new Color('#c0c0c0'));
    }
  }, [hovElement]);

  return (
    <Canvas
      className={canvClass}
      onCreated={state => {
        for (let parentRef of parentRefs) {
          state.events.connect?.(parentRef.current);
        }
      }}
    >
      <directionalLight
        position={[-10, -10, -10]}
        intensity={15}
        color="gold"
      />
      <directionalLight position={[20, 20, 20]} intensity={1} color="red" />
      <ambientLight color={col} intensity={4} />
      <MeshComponent />
    </Canvas>
  );
};

export default ThreeCanvas;
