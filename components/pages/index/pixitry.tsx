import { Sprite, Stage, useApp, useTick, Container } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import { Point } from "pixi.js";
import React, { useState } from "react";
import { useWindowSize } from "../../../utils/window_size";

function PixiTry(): JSX.Element {
  const windowSize = useWindowSize();

  return (
    <Stage
      width={windowSize.width}
      height={windowSize.height}
      style={{ position: "fixed", top: 0, left: 0, zIndex:0}}
      options={{
        backgroundColor: 0x121212,
        backgroundAlpha: 1,
        antialias: true,
        autoStart: true,
      }}
    >
      <FlashLight />
    </Stage>
  );
}

function FlashLight() {
  const app = useApp();

  const [Position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useTick((_) => {
    const mouseposition = app.renderer.plugins.interaction.mouse
      .global as Point;
    setPosition({ x: mouseposition.x, y: mouseposition.y });
  });

  return (
    // @ts-ignore
    <Container filters={[new PIXI.filters.BlurFilter(20)]}>
      <Sprite
        image={"flashlight"}
        scale={{ x: 0.05, y: 0.05 }}
        alpha={0.1}
        x={Position.x}
        y={Position.y}
        anchor={0.5}
      />
    </Container>
  );
}
export default PixiTry;
