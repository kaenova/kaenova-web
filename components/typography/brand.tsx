import React from "react";
import { ExtendClassName } from "../../types/react";

function Brand({ className }: ExtendClassName) {
  return (
    <h1
      className={
        "font-[Poppins] dark:text-primarywhite text-[18px] font-bold " +
        className
      }
    >
      <span>K</span>
      <span className="mr-[5px] ml-[5px]">M</span>
      <span>A</span>
    </h1>
  );
}

export default Brand;
