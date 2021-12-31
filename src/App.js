import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Boxes from "./Boxes";
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight />
      <pointLight position={[3, 5, 2]} intensity={3} color={0xffffff} />
      <Suspense fallback={null}>
        <Boxes />
      </Suspense>
    </Canvas>
  );
}
