import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useScrollMouse } from "../../../utils/scroll_mouse";
import { motion } from "framer-motion";

export default function ThreeTry() {
  return (
    <motion.div className="fixed top-0 left-0 w-screen h-screen opacity-40"
    initial={{ 
      opacity: 0,
     }}
    animate={{ 
      opacity: 0.4
     }}
    transition={{ 
      duration: 2,
      delay: 2
     }}
    >
      <Canvas
        camera={{
          position: [5, 3, 2],
        }}
      >
        <CombinedMesh />
      </Canvas>
    </motion.div>
  );
}

function CombinedMesh() {
  const moveMultiplier = 0.5;
  const mesh = useRef<THREE.Mesh>(null!);

  const [scrollDelta] = useScrollMouse(150);
  var speedRotation = 10
  var lastScrollDelta = 1
  const defaultSpeedRotation = 1;
  const accelerationMultiplier = 0.01;
  const deaccelerationMultiplier = 2

  useFrame((_, delta) => {
    let newSpeedRotation: number = speedRotation;

    let scrollVal = scrollDelta / lastScrollDelta
    lastScrollDelta = scrollDelta
    if (isNaN(scrollVal) || scrollVal == 0) {
      scrollVal = 1
    }

    newSpeedRotation +=  delta * scrollVal * accelerationMultiplier;

    if (newSpeedRotation > defaultSpeedRotation) {
      newSpeedRotation -= newSpeedRotation * delta * deaccelerationMultiplier
    }

    if (newSpeedRotation < defaultSpeedRotation) {
      newSpeedRotation += newSpeedRotation * delta * deaccelerationMultiplier
    }

    mesh.current.rotation.y += moveMultiplier * newSpeedRotation * delta;

    speedRotation = newSpeedRotation;
  });

  return (
    <mesh ref={mesh}>
      {/* <ambientLight/> */}
      <pointLight position={[-3, 2, 5]} args={[0xffffff, 1, 0]} />
      <pointLight position={[0, 1, -2]} args={[0xffffff, 1, 3]} />
      <pointLight position={[4, 0, 0]} args={[0xffffff, 1, 0]} />
      {/* <pointLight position={[5, 5, 3]} /> */}
      <Cone position={[0, 1, 0]} />
      <Sphere position={[0, 2.5, 0]} />
      <Plane />
    </mesh>
  );
}

function Plane(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props}>
      <boxGeometry args={[3, 0.2, 3]} />
      <meshStandardMaterial color={new THREE.Color(0x1d1d1d)} transparent />
    </mesh>
  );
}

function Sphere(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.3, 64, 32]} />
      <meshStandardMaterial color={new THREE.Color(0x1d1d1d)} transparent />
    </mesh>
  );
}

function Cone(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} rotation={new THREE.Euler(0, 0, 10)}>
      <coneGeometry args={[0.4, 0.8, 64]} />
      <meshStandardMaterial color={new THREE.Color(0x00b7c3)} transparent />
    </mesh>
  );
}
