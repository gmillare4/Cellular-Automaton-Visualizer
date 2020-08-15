import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

// function Cam() {
//   useFrame(({ clock, camera }) =>
//     camera.updateProjectionMatrix(
//       (camera.position.y = 0 + Math.sin(clock.getElapsedTime()) * 3),
//       (camera.position.x = 5 + clock.getElapsedTime() * 3)
//       //   (camera.position.x =
//       //     camera.position.x * Math.cos(rotSpeed) -
//       //     camera.position.z * Math.sin(rotSpeed)),
//       //   (camera.position.z =
//       //     camera.position.z * Math.cos(rotSpeed) +
//       //     camera.position.x * Math.sin(rotSpeed))
//     )
//   );
//   return null;
// }
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

// const rotSpeed = 0.02;
export const CellBox = (props) => {
  return (
    <>
      <h3>Hello from cell</h3>
      <Canvas
        style={{ height: 550, width: 550 }}
        colorManagement
        camera={{ position: [0, 80, 0], fov: 60 }}
      >
        <ambientLight intensity={0.8} />
        {/* <pointLight position={(-25, 30, -35)} intensity={0.5} />
        <pointLight position={(0, 10, 0)} intensity={1.5} /> */}
        {props.props.map((height, i) => {
          return height.map((width, j) => {
            if (width === 1) {
              return <Box position={[j - 25, 30, i - 25]} />;
            }
          });
        })}
        {/* <Box position={[0, 1, 0]} /> */}
        {/* <Cam /> */}
        <OrbitControls />
      </Canvas>
    </>
  );
};
/* 
// set up orbit controls
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.target.set(0, 0, 0);
controls.update();


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

*/
