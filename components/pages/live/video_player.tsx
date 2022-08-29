import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { ExtendClassName } from "../../../types/react";
import ReactPlayer from "react-player";
import H2Fill from "../../typography/h2_fill";
import {
  BsFillPlayFill,
  BsFillStopFill,
  BsFullscreen,
  BsPip,
  BsVolumeMuteFill,
  BsVolumeUpFill,
} from "react-icons/bs";
import screenfull from "screenfull";
import StrikeThroughH1 from "../../typography/strike_through_h1";
import { useQuery } from "@tanstack/react-query";
import { checkStatusLive } from "../../../networks/client/live";
import { AnimatePresence, motion } from "framer-motion";

/*
  Video player on phone will be full width, but if in desktop please look up to design guide
*/
function VideoPlayer({ className }: ExtendClassName) {
  const iconColor = "white";
  const url = "https://live.kaenova.my.id/.m3u8";

  const { data } = useQuery(["live_status"], checkStatusLive, {
    refetchInterval: 30000,
  });

  const reactPlayer = useRef<HTMLDivElement>(null);

  // Video Check
  const [VideoTitle, setVideoTitle] = useState("Hello World");
  const [IsOnline, setIsOnline] = useState(false);

  const [Playing, setPlaying] = useState(true);
  const [Mute, setMute] = useState(true);
  const [Pip, setPip] = useState(false);
  const [Buffering, setBuffering] = useState(true);

  // Volume
  const [Volume, setVolume] = useState(0);
  const [LastVolume, setLastVolume] = useState(0.5);

  const [FirstTime, setFirstTime] = useState(true);

  function handlePipToggle() {
    setPip(!Pip);
  }

  function handleMuteToggle() {
    setMute(!Mute);
    if (Mute) {
      setVolume(LastVolume);
    }
    if (!Mute) {
      setVolume(0);
    }
  }

  function handlePlayToggle() {
    if (FirstTime) {
      handleMuteToggle();
    } else {
      setPlaying(!Playing);
    }
    setFirstTime(false);
  }

  function handleFullScreen() {
    screenfull.toggle(reactPlayer.current!);
  }

  function handleVolumeChange(newValue: number) {
    setMute(false);
    setVolume(newValue);
    setLastVolume(newValue);
  }

  function handleBuffer() {
    setBuffering(true);
  }

  function handleOffBuffer() {
    setBuffering(false);
  }

  useEffect(() => {
    if (data) {
      setIsOnline(data.isLive);
      setVideoTitle(data.title);
    }
  }, [data]);

  useEffect(() => {
    console.log(Buffering);
  }, [Buffering]);

  if (!IsOnline) {
    return (
      <div className={"relative w-full" + className}>
        <div className="h-full flex flex-col justify-center">
          <StrikeThroughH1 strike="Off" normal="line" />
          <H2Fill className="text-center">Kaenova is currently offline</H2Fill>
        </div>
      </div>
    );
  }

  return (
    <div ref={reactPlayer} className={"relative w-full" + className}>
      <ReactPlayer
        height={"100%"}
        playing={Playing}
        muted={Mute}
        width={"100%"}
        url={url}
        style={{
          position: "absolute",
        }}
        pip={Pip}
        loop={true}
        volume={Volume}
        onBuffer={handleBuffer}
        onBufferEnd={handleOffBuffer}
      />

      <div className="relative h-full group overflow-hidden">
        <div
          className={
            "opacity-0 absolute flex w-full h-full justify-center items-center select-none transition-all " +
            [Buffering && " opacity-100"]
          }
        >
          <svg
            aria-hidden="true"
            className="w-10 h-10 animate-spin  text-secondarydark text-opacity-40 fill-accent"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

        {/* Top */}
        <div className="flex flex-row w-full absolute z-[1] p-2 opacity-0 group-hover:opacity-100  transition-all duration-200 bg-opacity-10 bg-gradient-to-b from-primarydark ">
          {/* Title */}
          <H2Fill>{VideoTitle}</H2Fill>
        </div>

        {/* Bottom */}
        <div className="w-full flex flex-col justify-between z-[1] p-2 absolute opacity-0 bottom-0 group-hover:opacity-100  transition-all duration-200 bg-opacity-10 bg-gradient-to-t from-primarydark">
          {/* Bottom control */}
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row gap-5">
              <button onClick={handlePlayToggle}>
                {!Playing ? (
                  <BsFillPlayFill color={iconColor} />
                ) : (
                  <BsFillStopFill color={iconColor} />
                )}
              </button>

              <div className="flex flex-row items-center">
                <button onClick={handleMuteToggle}>
                  {!Mute ? (
                    <BsVolumeUpFill color={iconColor} />
                  ) : (
                    <BsVolumeMuteFill color={iconColor} />
                  )}
                </button>

                <input
                  type="range"
                  max={1}
                  min={0}
                  step={0.01}
                  value={Volume}
                  className="scale-75"
                  onChange={(e) => {
                    handleVolumeChange(parseFloat(e.target.value));
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row gap-5">
              {/* Pip */}
              {ReactPlayer.canEnablePIP(url) && (
                <button onClick={handlePipToggle}>
                  <BsPip color={iconColor} />
                </button>
              )}

              {/* Full screen */}
              <button onClick={handleFullScreen}>
                <BsFullscreen color={iconColor} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-full w-full absolute"
          onClick={handlePlayToggle}
        ></div>
      </div>
    </div>
  );
}

export default VideoPlayer;
