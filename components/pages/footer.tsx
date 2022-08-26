import { PixiRef, Sprite, Stage, useApp, useTick } from "@inlet/react-pixi";
import { InteractionEvent } from "pixi.js";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useWindowSize } from "../../utils/window_size";
import NormalText from "../typography/normal_text";
import { Howl } from "howler";
import { createPortal } from "react-dom";
import { portalId } from "../layout/portal";
import { AnimatePresence, motion } from "framer-motion";
import StrikeThroughH1 from "../typography/strike_through_h1";
import H2Fill from "../typography/h2_fill";

const levelGif = ["/wow.gif", "https://c.tenor.com/MhVJtrDqT8IAAAAd/nice-thumbs-up.gif", "https://c.tenor.com/UniGtspR-BcAAAAC/damage-thats-a-lot-of-damage.gif", "https://64.media.tumblr.com/36b6133796e2f93ae88c282b23621da2/05bd0b5ff8579b22-cc/s540x810/c6679aeecffb451e20afaa6c6c62bf625eeb39c6.gif"];
const levelTitle = ["WOW", "Nice!", "Damn", "Huh?!"];
const levelCaption = ["You just won my mini games", "You really enjoying this huh?", "That's a lot of boxes", "Wait, you still going?"];
const maxLevel = levelCaption.length;

function Footer() {
  const windowSize = useWindowSize();

  // Game related
  const numBoxLevel = 5;
  const [NumberBox, setNumberBox] = useState(numBoxLevel);
  const [CurrentNumBox, setCurrentNumBox] = useState(numBoxLevel);
  const [GameLevel, setGameLevel] = useState(1);
  const [Score, setScore] = useState(0)

  // Modal related
  const [DOMReady, setDOMReady] = useState(false);
  const [ShowModal, setShowModal] = useState(false);

  // on mounted
  useEffect(() => {
    setDOMReady(true);
  }, []);

  function restartGame() {
    if (CurrentNumBox == 0) {
      setNumberBox(0);
      setTimeout(() => {
        setNumberBox(numBoxLevel * GameLevel);
        setCurrentNumBox(numBoxLevel * GameLevel);
      }, 500);
    } else {
      setNumberBox(0);
      setTimeout(() => {
        setNumberBox(CurrentNumBox);
        setCurrentNumBox(CurrentNumBox);
      }, 500);
    }
  }

  function onWin() {
    setShowModal(true);
  }

  // Apply on win
  useEffect(() => {
    if (CurrentNumBox == 0) onWin();
  }, [CurrentNumBox]);

  return (
    <>
      {DOMReady && (
        <WinModal
          isShow={ShowModal}
          level={GameLevel }
          onClick={() => {
            setShowModal(false);
            let newGameLevel = GameLevel + 1;
            setGameLevel(newGameLevel);
          }}
        />
      )}
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
            return (
              <MarioBox
                key={i}
                onClick={() => {
                  setCurrentNumBox(CurrentNumBox - 1);
                  setScore(Score + 100)
                }}
              />
            );
          })}
        </Stage>
        <div className=" w-full h-full flex flex-col justify-center items-center z-[9] ">
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
          {
            (Score != 0) &&
            <span className="flex flex-row justify-center gap-2 mt-2 items-center">
            <NormalText className="text-center dark:text-thirddark">
              Score
            </NormalText>
            <span className="bg-secondarydark p-1 rounded-[5px]">
              <NormalText>
                {Score}
              </NormalText>
            </span>
          </span>
          }
        </div>
      </footer>
    </>
  );
}

function MarioBox({ onClick }: { onClick?: Function }) {
  const speedMultiplier = 1;
  const boundOffset = 10;

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
  useEffect(() => {
    setCoinSound(
      new Howl({
        src: ["/coin.mp3"],
        preload: true,
        volume: 0.05,
      })
    );
  }, []);

  const [Position, setPosition] = useState({
    x: screen.width / 2,
    y: screen.height / 2,
  });

  const [PositionVector, setPositionVector] = useState({
    x: Math.random() * 3 - 1,
    y: Math.random() * 3 - 1,
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
    if (!Clicked) {
      setSpriteTexture("coin");
      coinSound!.play();
      setClicked(true);
      if (onClick) onClick();
    }
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

function WinModal({
  isShow,
  level,
  onClick,
}: {
  isShow: boolean;
  level: number;
  onClick?: Function;
}) {
  function handleClick() {
    if (onClick) onClick();
  }

  let title
  let caption
  let image

  if (level <= maxLevel) {
    title = levelTitle[level - 1]
    caption = levelCaption[level -1]
    image = levelGif[level - 1]
  } else {
    title = "This is the limit"
    caption = "You've reach my maximum power to code this. Share your score and tag my insta @kaenovama"
    image = "https://c.tenor.com/fvUZCxd11ZoAAAAC/dragon-ball-super-legendary.gif"
  }

  // Handle strikethrough
  let name = title;
  let nameLen = name.length;
  let randomSlice = Math.random() * nameLen;
  let strike = name.slice(0, randomSlice);
  let outline = name.slice(randomSlice, nameLen);

  return createPortal(
    <AnimatePresence mode="wait">
      {isShow && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed w-full h-screen z-[999999] flex flex-col justify-center items-center "
        >
          <button className="bg-secondarydark flex p-5 rounded-[5px] flex-col z-[99999999] justify-center items-center max-w-[450px] m-2"
          onClick={handleClick}
          >
            <StrikeThroughH1 strike={strike} normal={outline} />

            <H2Fill>{caption}</H2Fill>

            <img src={image} className="max-w-[350px] mt-2" />

            <span className="flex flex-row justify-center gap-2 mt-5">
              <NormalText className="text-center dark:text-thirddark">
                Just click the
              </NormalText>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                width={20}
                height={20}
              />
              <NormalText className="text-center dark:text-thirddark">
                on the footer to continue
              </NormalText>
            </span>
          </button>
          <div className="absolute w-full h-full top-0 left-0 bg-primarydark  opacity-70 justify-center items-center z-[9999999]"></div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById(portalId)!
  );
}

export default Footer;
