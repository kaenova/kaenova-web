import React from "react";
import { PropsWithChildrenClassName } from "../../types/react";

function H1Outline({ children, className }: PropsWithChildrenClassName) {
  return (
    <h1
      className={
        "text-[35px] font-bold text-stroke-primarywhite text-transparent text-stroke-1 select-none " +
        className
      }
    >
      {children}
    </h1>
  );
}

export default H1Outline;
