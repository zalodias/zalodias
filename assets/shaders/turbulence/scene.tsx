'use client';

import fragmentShader from './fragment.glsl';
import vertexShader from './vertex.glsl';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';

export function Cube() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    const { clock } = state;
    const material = mesh.current.material as ShaderMaterial;
    material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uResolution: { value: [window.innerWidth, window.innerHeight] },
          uTime: { value: 0 },
        }}
      />
    </mesh>
  );
}

export function Scene() {
  return (
    <div className="h-100 w-full">
      <Canvas>
        <Cube />
      </Canvas>
    </div>
  );
}
