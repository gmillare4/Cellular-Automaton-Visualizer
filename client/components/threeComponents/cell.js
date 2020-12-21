import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";
import * as THREE from "three";

const colorArr = [
  "#006400",
  "#0c6808",
  "#166c11",
  "#1d6f18",
  "#24731f",
  "#2a7725",
  "#307b2b",
  "#357f31",
  "#3b8336",
  "#40873c",
  "#458b41",
  "#4a8e47",
  "#4f924c",
  "#559652",
  "#5a9a57",
  "#5f9e5d",
  "#64a262",
  "#69a668",
  "#6eaa6d",
  "#73ae73",
];

const Box = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

const tempObject = new THREE.Object3D();

const Boxes = (props) => {
  const cubeArr = props.props.props;
  const [set] = useState();
  const ref = useRef();
  useFrame((state) => {
    let i = 0;
    for (let y = 0; y < 20; y++)
      for (let z = 0; z < 20; z++)
        for (let x = 0; x < 20; x++) {
          const id = i++;
          tempObject.position.set(x - 10, 10 - y, z - 10);
          if (cubeArr[y][z][x] === 1) {
            tempObject.visible = true;
          } else if (cubeArr[y][z][x] === 0) {
            tempObject.visible = false;
          }
          ref.current.material.visible.needsUpdate = true;
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[null, null, 8000]}>
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshPhongMaterial
        attach="material"
        color="green"
        transparent={true}
        opacity={1}
      >
        <instancedBufferAttribute attachObject={["visible"]} args={[false]} />
      </meshPhongMaterial>
    </instancedMesh>
  );
};

export const CellBox = (props) => {
  return (
    <>
      <Canvas
        style={{ height: 550, width: 550 }}
        colorManagement
        camera={{ position: [0, 30, 0], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 50, 0]} intensity={0.8} />
        <pointLight position={[0, 20, 20]} intensity={0.5} />
        <pointLight position={[0, -30, 0]} intensity={1.5} />
        {props.props.map((depth, k) => {
          return depth.map((height, i) => {
            return height.map((width, j) => {
              if (width === 1) {
                return (
                  <Box
                    position={[j - 10, 10 - k, i - 10]}
                    color={colorArr[k]}
                  />
                );
              }
            });
          });
        })}
        <OrbitControls />
      </Canvas>
    </>
  );
};
