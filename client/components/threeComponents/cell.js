import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

// function Dolly() {
//   // This one makes the camera move in and out
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
  console.log(props.props);
  return (
    <>
      <h1>Hello from cell</h1>
      <Canvas colorManagement camera={{ position: [10, 80, 50], fov: 50 }}>
        <ambientLight intensity={0.8} />
        {props.props.map((height, i) => {
          return height.map((width, j) => {
            if (width === 1) {
              return <Box position={[i, 50, j]} />;
            }
          });
        })}
        {/* <Box position={[0, 1, 0]} /> */}
        {/* <Dolly /> */}
      </Canvas>
    </>
  );
};
