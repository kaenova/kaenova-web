import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactHowler from "react-howler";
import { motion } from "framer-motion";
import NormalText from "../../typography/normal_text";

function BackgroundAudio() {
  const [Play, setPlay] = useState(true);
  const [Volume, setVolume] = useState(0.15);

  function handleButton() {
    let newPlay = !Play;
    setPlay(newPlay);
  }

  return (
    <>
      <ReactHowler
        src={"/lofi.mp3"}
        preload={true}
        playing={Play}
        loop={true}
        volume={Volume}
        onPlayError={(e) => console.log(e)}
      />
      <div className="fixed right-2 top-0 group flex flex-col gap-4 z-[999999999]">
        <button
          className="w-full flex flex-col items-center relative top-2"
          onClick={handleButton}
        >
          <div className="opacity-80 group-hover:opacity-100 active:opacity-100 transition-all">
            <Visualizer
              isPlaying={Play}
              width={20}
              height={15}
              numberOfBar={4}
              gap={4}
            />
          </div>
          <NormalText className="opacity-80 group-hover:opacity-100 active:opacity-100 select-none">
            Music
          </NormalText>
        </button>
      </div>
    </>
  );
}

type VisualizerProps = {
  isPlaying: boolean;
  numberOfBar?: number;
  gap?: number;
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
  const trueGap = gap || 10;

  const barWidth = (visualizerWidth - (trueGap * numBar - 1)) / numBar;

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
          gap: gap,
        }}
      >
        {[...Array(numBar)].map((_, i) => {
          return (
            <motion.div
              key={i}
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
                duration: Math.random() * 1 + 0.5,
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
