import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

const Box = ({ position }) => {
  //   const mesh = useRef(null);
  //   useFrame(() => {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  //   });
  return (
    <mesh
      position={position}
      // ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
};

export const CellBox = (props) => {
  // console.log("cell props", props);
  // const firstLayer = props.props[0];
  return (
    <>
      <h3>Hello from cell</h3>
      <Canvas
        style={{ height: 400, width: 400 }}
        colorManagement
        camera={{ position: [0, 40, 0], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 50, 0]} intensity={0.8} />
        <pointLight position={[0, 20, 20]} intensity={0.5} />
        <pointLight position={[0, -30, 0]} intensity={1.5} />
        {/* <pointLight position={(-25, 30, -35)} intensity={0.5} />
        <pointLight position={(0, 10, 0)} intensity={1.5} /> */}
        {props.props.map((depth, k) => {
          return depth.map((height, i) => {
            return height.map((width, j) => {
              if (width === 1) {
                return <Box position={[j - 10, 10 - k, i - 10]} />;
              }
            });
          });
        })}

        {/* {firstLayer.map((height, i) => {
          return height.map((width, j) => {
            if (width === 1) {
              return <Box position={[j - 20, 30, i - 20]} />;
            }
          });
        })} */}
        <OrbitControls />
      </Canvas>
    </>
  );
};
