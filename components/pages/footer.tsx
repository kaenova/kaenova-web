import { Sprite, Stage, useApp, useTick } from "@inlet/react-pixi";
import { InteractionEvent } from "pixi.js";
import React, { useRef, useState } from "react";
import { useWindowSize } from "../../utils/window_size";
import NormalText from "../typography/normal_text";

function Footer() {
  const [PlayGame, setPlayGame] = useState(true);
  const windowSize = useWindowSize();

  return (
    <>
      <footer className="relative select-none h-[100px] z-[99999] border-t-2 border-thirddark">
        {PlayGame && (
          <Stage
            height={100}
            width={windowSize.width}
            style={{ position: "absolute", top: 0, left: -8, zIndex: 100 }}
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
          </Stage>
        )}
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <NormalText className="dark:text-thirddark">
            Kaenova Mahendra Auditama
          </NormalText>
          <NormalText className="dark:text-thirddark">2022</NormalText>

          <span className="flex flex-row justify-center gap-2 ">
              <NormalText className="text-center dark:text-thirddark">Click the</NormalText>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                width={20}
                height={20}
              />
            </span>
        </div>
      </footer>
    </>
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
    "box"
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
    setSpriteTexture("coin");
    setTimeout(() => {
      // @ts-ignore
      ref.current.visible = false;
    }, 1000);
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

export default Footer;
