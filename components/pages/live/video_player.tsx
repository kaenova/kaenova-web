import React from "react";
import { ExtendClassName } from "../../../types/react";

/*
  Video player on phone will be full width, but if in desktop please look up to design guide
*/
function VideoPlayer({ className }: ExtendClassName) {
  return <div className={" " + className}>Video Player</div>;
}

export default VideoPlayer;
