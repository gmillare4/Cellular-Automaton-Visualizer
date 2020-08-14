import React from "react";
import { Canvas } from "react-three-fiber";

export const CellBox = () => {
  return (
    <>
      <h1>Hello from cell</h1>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
    </>
  );
};
