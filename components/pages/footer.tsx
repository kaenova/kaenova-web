import { PixiRef, Sprite, Stage, useApp, useTick } from "@inlet/react-pixi";
import { InteractionEvent } from "pixi.js";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "../../utils/window_size";
import NormalText from "../typography/normal_text";
import { Howl } from "howler";

function Footer() {
  const windowSize = useWindowSize();
  const [NumberBox, setNumberBox] = useState(20);

  function restartGame() {
    setNumberBox(0)
    setTimeout(() => {
      setNumberBox(30)
    }, 1000)
  }

  return (
    <>
      <footer className="relative select-none h-[100px] z-[99999] border-t-2 border-thirddark">
        <Stage
          height={100}
          width={windowSize.width}
          style={{ position: "absolute", top: 0, left: -8, zIndex: 100 }}
          options={{
            backgroundAlpha: 0,
            antialias: true,
            autoStart: true,
          }}
        >
          {[...Array(NumberBox)].map((_, i) => {
            return <MarioBox key={i} />;
          })}
        </Stage>
        <div className=" w-full h-full flex flex-col justify-center items-center z-[99999] ">
          <NormalText className="dark:text-thirddark">
          ©2022 Kaenova Mahendra Auditama. All Rights Reserved.
          </NormalText>

          <span className="flex flex-row justify-center gap-2 ">
            <NormalText className="text-center dark:text-thirddark">
              Click the
            </NormalText>
            <button className="z-[999999]" onClick={restartGame}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                width={20}
                height={20}
              />
            </button>
          </span>
        </div>
      </footer>
    </>
  );
}

function MarioBox() {
  const speedMultiplier = 2;
  
  const app = useApp();
  
  const screen = {
    width: app.screen.width,
    height: app.screen.height,
  };
  
  const [SpriteTexture, setSpriteTexture] = useState("box");
  const [Visible, setVisible] = useState(true);
  const [Clicked, setClicked] = useState(false);

  type ISprite = PixiRef<typeof Sprite>;
  const ref = useRef<ISprite>(null);

  // Setup howl sound
  const [coinSound, setCoinSound] = useState<Howl>();
  useLayoutEffect(() => {
    setCoinSound(
      new Howl({
        src: ["/coin.mp3"],
        preload: true,
        volume: 0.1,
      })
    );
  }, []);

  const [Position, setPosition] = useState({
    x: Math.random() * screen.width + 50,
    y: Math.random() * screen.height + 50,
  });

  const [PositionVector, setPositionVector] = useState({
    x: Math.random() * -1,
    y: Math.random() * -1,
  });

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
    if (!Clicked) coinSound!.play();
    setClicked(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }

  return (
    <>
      {Visible && (
        <Sprite
          ref={ref}
          image={SpriteTexture}
          scale={{ x: 0.1, y: 0.1 }}
          x={Position.x}
          y={Position.y}
          anchor={0.5}
          interactive={true}
          click={handleClick}
          tap={handleClick}
          touchstart={handleClick}
        />
      )}
    </>
  );
}

export default Footer;
