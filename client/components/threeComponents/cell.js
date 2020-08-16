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

// const ref = useRef();
// useFrame((state) => {
//   // const time = state.clock.getElapsedTime()
//   // ref.current.rotation.x = Math.sin(time / 4)
//   // ref.current.rotation.y = Math.sin(time / 2)
//   let i = 0;
//   for (let x = 0; x < 10; x++)
//     for (let y = 0; y < 10; y++)
//       for (let z = 0; z < 10; z++) {
//         const id = i++;
//         tempObject.position.set(x - 10, 10 - y, z - 10);
//         if (hovered !== previous.current) {
//           tempColor
//             .set(id === hovered ? "white" : colors[id])
//             .toArray(colorArray, id * 3);
//           ref.current.geometry.attributes.color.needsUpdate = true;
//         }
//         tempObject.updateMatrix();
//         ref.current.setMatrixAt(id, tempObject.matrix);
//       }
//   ref.current.instanceMatrix.needsUpdate = true;
// });

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
