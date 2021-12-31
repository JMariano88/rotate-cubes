import React, { useState } from "react";
import { useSpring } from "react-spring";
import { a } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

function Box(props) {
  const [ry, setRot] = useState(Math.round(Math.random() * (4 - 1) + 1));

  const { rot } = useSpring({
    rot: (ry * Math.PI) / 2,
    config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 }
  });

  const handleClick = (ry) => {
    const ryr = ry + 1;

    setRot(ryr);
  };

  const [cube1, cube2, cube3, cube4] = useTexture([
    "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
    "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"
  ]);

  return (
    <>
      <a.mesh {...props} rotation-y={rot} onClick={() => handleClick(ry)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attachArray="material" map={cube1} />
        <meshBasicMaterial attachArray="material" map={cube2} />
        <meshBasicMaterial attachArray="material" color="white" />
        <meshBasicMaterial attachArray="material" color="white" />
        <meshBasicMaterial attachArray="material" map={cube3} />
        <meshBasicMaterial attachArray="material" map={cube4} />
      </a.mesh>
    </>
  );
}

export default Box;
