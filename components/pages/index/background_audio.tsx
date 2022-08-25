import { Howl } from "howler";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactHowler from "react-howler";
import { motion } from "framer-motion";
import mitt from "next/dist/shared/lib/mitt";

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
      <div className="fixed z-[1] right-3">
        <button className="w-full" onClick={handleButton}>
          <Visualizer isPlaying={Play} width={40} height={20} numberOfBar={3} gap={3} />
        </button>
      </div>
    </>
  );
}

type VisualizerProps = {
  isPlaying: boolean;
  numberOfBar?: number;
  gap? : number
  width?: number;
  height?: number;
};

function Visualizer({
  isPlaying,
  width,
  gap,
  height,
  numberOfBar,
}: VisualizerProps) {
  const visualizerWidth = width || 40;
  const visualizerHeight = height || 80;
  const numBar = numberOfBar || 5;
  const trueGap = gap || 10

  const barWidth = (visualizerWidth - (trueGap * numBar - 1)) / numBar


  const duration = 1;

  return (
    <div
      className="bg-transparent relative"
      style={{
        width: visualizerWidth,
        height: visualizerHeight,
      }}
    >
      <div
        className="h-[100%] w-full left grid grid-flow-col absolute"
        style={{
          width: visualizerWidth,
          gap: gap
        }}
      >
        {[...Array(numBar)].map((_, i) => {
          return (
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: isPlaying ? "100%" : "40%",
              }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                repeatType: "mirror",
                ease: "linear",
                duration: duration,
                delay: Math.random() * 2,
              }}
              style={{
                width: barWidth,
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
