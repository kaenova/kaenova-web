import React, { MouseEventHandler, ReactEventHandler } from "react";
import H3Fill from "../typography/h3_fill";

type ElevatedButtonType = {
  className?: string;
  text: string;
  onClick? : MouseEventHandler;
};

function ElevatedButton({ text, className, onClick }: ElevatedButtonType) {
  return (
    <button onClick={onClick} className={"relative w-min h-min transition-all group " + className}>
      <div className="relative z-[10] rounded-[5px] dark:bg-secondarydark min-w-[100px] min-h-[30px] flex flex-row justify-center items-center">
        <H3Fill>{text}</H3Fill>
      </div>
      <div className="absolute top-[5px] left-[5px] z-[0] bg-transparent border-accent border-2 rounded-[5px] min-w-[100px] min-h-[30px] transition-all group-hover:top-[10px] group-hover:left-[10px]"></div>
    </button>
  );
}

export default ElevatedButton;
