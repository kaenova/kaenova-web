import React, { ChangeEventHandler, useRef, useState } from "react";
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

/*
  Video player on phone will be full width, but if in desktop please look up to design guide
*/
function VideoPlayer({ className }: ExtendClassName) {
  const iconColor = "white";
  const url =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";

  const reactPlayer = useRef<HTMLDivElement>(null);

  const [VideoTitle, setVideoTitle] = useState("Hello World");

  const [Playing, setPlaying] = useState(true);
  const [Mute, setMute] = useState(true);
  const [Pip, setPip] = useState(false);

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
      />

      <div className="relative h-full group overflow-hidden">
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
