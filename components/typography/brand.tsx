import React from "react";
import { ExtendClassName } from "../../types/react";

function Brand({ className }: ExtendClassName) {
  return (
    <h1
      className={
        "font-[Poppins] tracking-brand dark:text-primarywhite text-[18px] font-bold " +
        className
      }
    >
      KMA
    </h1>
  );
}

export default Brand;
