import React from "react";
import Box from "./Box";

function Boxes() {
  const posx = 1.1;

  return (
    <>
      <Box position={[-posx, 0, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[posx, 0, 0]} />
      <Box position={[posx, posx, 0]} />
      <Box position={[0, posx, 0]} />
      <Box position={[-posx, posx, 0]} />
      <Box position={[posx, -posx, 0]} />
      <Box position={[0, -posx, 0]} />
      <Box position={[-posx, -posx, 0]} />
    </>
  );
}

export default Boxes;
