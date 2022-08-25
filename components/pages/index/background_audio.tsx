import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactHowler from "react-howler";
import { motion } from "framer-motion";
import mitt from "next/dist/shared/lib/mitt";
import NormalText from "../../typography/normal_text";

function BackgroundAudio() {
  const [Play, setPlay] = useState(false);
  const [Volume, setVolume] = useState(0.9);

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
      <div className="fixed z-[3] right-3 group flex flex-col gap-4">
        <button
          className="w-full flex flex-col items-center"
          onClick={handleButton}
        >
          <div className="opacity-80 group-hover:opacity-100 active:opacity-100 transition-all">
            <Visualizer
              isPlaying={Play}
              width={40}
              height={15}
              numberOfBar={4}
              gap={5}
            />
          </div>
        </button>
        <div className="bg-secondarydark rounded-[5px] p-3 select-none scale-0 group-hover:scale-100 transition-all flex flex-col justify-center items-center">
          <NormalText>Music</NormalText>
          <div className="flex flex-col justify-center items-center">
            <NormalText className="text-center">Volumes</NormalText>
            <div className="h-[100px] w-[30px] relative flex flex-col justify-center items-center mt-2">
              <input
                id="default-range"
                type="range"
                value={Volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                max={1}
                min={0}
                step={0.01}
                className="h-2 bg-primarydark rounded-lg appearance-none cursor-pointer dark:bg-thirddark -rotate-90 w-[100px]"
              />
            </div>
          </div>
        </div>
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
