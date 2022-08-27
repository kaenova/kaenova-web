import React from "react";
import LiveChat from "./live_chat";
import VideoPlayer from "./video_player";

function LiveLayout() {
  return (
    <div className="flex flex-col xl:flex-row max-h-screen max-w-screen h-screen w-screen" style={{}}>
      <VideoPlayer className="h-[30%] xl:w-[80%] xl:h-screen grow bg-blue-700" />
      <LiveChat className={`h-[70%] xl:w-[20%] xl:h-full max-h-screen overflow-hidden`} />
    </div>
  );
}

export default LiveLayout;
