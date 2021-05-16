import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Shadow, Sky } from "@react-three/drei";
import "./App.css";

function Dot({ size }) {
  return (
    <>
      <circleBufferGeometry args={[size, 64]} />
      <meshBasicMaterial color="#404040" shadowSide={8} />
    </>
  );
}

function One() {
  return (
    <>
      <mesh position={[0, 0, 0.501]}>
        <Dot size={0.1} />
      </mesh>
    </>
  );
}

function Two() {
  return (
    <>
      <mesh position={[0.51, 0.25, -0.25]} rotation={[0, 1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.51, -0.25, 0.25]} rotation={[0, 1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
    </>
  );
}

function Three() {
  return (
    <>
      <mesh position={[-0.25, 0.509, 0.25]} rotation={[-1.501, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0, 0.51, 0]} rotation={[-1.5, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.25, 0.509, -0.25]} rotation={[-1.501, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
    </>
  );
}

function Four() {
  return (
    <>
      <mesh position={[-0.25, -0.51, 0.25]} rotation={[1.55, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.25, -0.51, 0.25]} rotation={[1.55, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.25, -0.51, -0.25]} rotation={[1.55, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.25, -0.51, -0.25]} rotation={[1.55, 0, 0]}>
        <Dot size={0.08} />
      </mesh>
    </>
  );
}

function Five() {
  return (
    <>
      <mesh position={[-0.51, 0.25, -0.25]} rotation={[0, -1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.51, 0.25, 0.25]} rotation={[0, -1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.51, 0, 0]} rotation={[0, -1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.51, -0.25, -0.25]} rotation={[0, -1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.51, -0.25, 0.25]} rotation={[0, -1.5, 0]}>
        <Dot size={0.08} />
      </mesh>
    </>
  );
}

function Six() {
  return (
    <>
      <mesh position={[0.25, 0.25, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.25, 0, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[0.25, -0.25, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.25, -0.25, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.25, 0, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
      <mesh position={[-0.25, 0.25, -0.501]} rotation={[0, 3.15, 0]}>
        <Dot size={0.08} />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <RoundedBox
        args={[1, 1, 1]} // Width, Height and Depth of the box
        radius={0.15} // Border-Radius of the box
        smoothness={10} // Optional, number of subdivisions
      >
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <meshPhongMaterial color="white" />
      </RoundedBox>
      <Shadow scale={[2, 2, 1]} position-y={-1} rotation-x={-Math.PI / 2} />
      <OrbitControls enableZoom={false} />
      <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      />
    </Canvas>
  );
}
