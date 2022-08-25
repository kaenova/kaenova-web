import { Howl } from "howler";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactHowler from "react-howler";
import { motion } from "framer-motion";

function BackgroundAudio() {
  const [Play, setPlay] = useState(false);

  function handleButton() {
    let newPlay = !Play;
    setPlay(newPlay);
  }

  return (
    <>
      <ReactHowler
        src={"/coin.mp3"}
        preload={true}
        playing={Play}
        loop={true}
        volume={0.1}
        onPlayError={(e) => console.log(e)}
      />
      <div className="fixed top-0 right-[300px] z-[1]">
        <button onClick={handleButton}>
          <Visualizer isPlaying={Play}  />
        </button>
      </div>
    </>
  );
}

type VisualizerProps = {
  isPlaying: boolean;
  numberOfBar?: number;
  width?: number;
  height?: number;
};

function Visualizer({ isPlaying, width, height, numberOfBar }: VisualizerProps) {
  const visualizerWidth = width || 40;
  const visualizerHeight = height! * 2 || 80;
  const numBar = numberOfBar || 5 ;

  const barGap = visualizerWidth / numBar;

  const duration = 1;

  return (
    <div
      className="bg-transparent relative"
      style={{
        width: `${visualizerWidth}px`,
        height: `${visualizerHeight}px`,
      }}
    >
      <div
        className="absolute h-full left-0 grid grid-flow-col top-[100%]"
        style={{
          gap: barGap,
        }}
      >
        {[...Array(numBar)].map((_, i) => {
          return (
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: isPlaying ? "50%" : "20%",
              }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                repeatType: "mirror",
                ease: "linear",
                duration: duration,
                delay: Math.random() * 2,
              }}
              style={{
                width: visualizerWidth / numBar,
              }}
              className="h-full dark:bg-primarywhite p-0 m-0"
            />
          );
        })}
      </div>
      <div
        className="absolute h-full grid grid-flow-col rotate-180"
        style={{
          gap: barGap,
        }}
      >
        {[...Array(numBar)].map((_, i) => {
          return (
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: isPlaying ? "50%" : "10%",
              }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                repeatType: "mirror",
                ease: "linear",
                duration: duration,
                delay: Math.random() * 2,
              }}
              style={{
                width: visualizerWidth / numBar,
              }}
              className="h-full dark:bg-primarywhite p-0 m-0"
            />
          );
        })}
      </div>
    </div>
  );
}

export default BackgroundAudio;
