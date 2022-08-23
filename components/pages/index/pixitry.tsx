import {
  Container,
  Sprite,
  Stage,
  useApp,
  useTick,
} from "@inlet/react-pixi/legacy";
import { InteractionEvent, Point } from "pixi.js";
import React, { useRef, useState } from "react";
import { useWindowSize } from "../../../utils/window_size";

function PixiTry() {
  const windowSize = useWindowSize();

  return (
    <Stage
      width={windowSize.width}
      height={windowSize.height}
      style={{ position: "fixed", top: 0, left: 0 }}
      options={{
        backgroundAlpha: 0,
        antialias: true,
        autoStart: true,
        forceCanvas: true,
      }}
    >
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <MarioBox />
      <FlashLight />
    </Stage>
  );
}

function FlashLight() {
  const offsetMid = 100;
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
    <Sprite
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png"
      }
      scale={{ x: 0.1, y: 0.1 }}
      alpha={0.3}
      x={Position.x}
      y={Position.y}
      anchor={0.5}
    />
  );
}

function MarioBox() {
  const speedMultiplier = 2;

  const app = useApp();
  const ref = useRef(null);

  const screen = {
    width: app.screen.width,
    height: app.screen.height,
  };

  const [Position, setPosition] = useState({
    x: Math.random() * screen.width + 50,
    y: Math.random() * screen.height + 50,
  });

  const [PositionVector, setPositionVector] = useState({
    x: Math.random() * -1,
    y: Math.random() * -1,
  });

  const [SpriteTexture, setSpriteTexture] = useState(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
  );

  useTick((delta) => {
    let newPositionVector = PositionVector;

    if (Position.x > screen.width || Position.x < 0) {
      newPositionVector.x *= -1;
    }

    if (Position.y > screen.height || Position.y < 0) {
      newPositionVector.y *= -1;
    }

    setPosition({
      x: Position.x + delta * speedMultiplier * newPositionVector.x,
      y: Position.y + delta * speedMultiplier * newPositionVector.y,
    });
    setPositionVector(newPositionVector);
  });

  function handleClick(e: InteractionEvent) {
    setSpriteTexture("https://art.pixilart.com/0433de3a9dca4b9.png");
    setTimeout(() => {
      // @ts-ignore
      ref.current.visible = false
    }, 1000)
  }

  return (
    <Sprite
      ref={ref}
      image={SpriteTexture}
      scale={{ x: 0.1, y: 0.1 }}
      x={Position.x}
      y={Position.y}
      anchor={0.5}
      interactive={true}
      click={handleClick}
      touchstart={handleClick}
    />
  );
}

export default PixiTry;
