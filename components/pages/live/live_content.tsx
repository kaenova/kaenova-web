import React from "react";

function LiveLayout() {
  return (
    <div className="bg-red-600 h-full flex flex-col xl:flex-row w-full">
      <div className={`max-h-[30%] xl:max-w-[80%] xl:max-h-full grow bg-blue-700`}>Video</div>
      <div>Chat</div>
    </div>
  );
}

export default LiveLayout;
