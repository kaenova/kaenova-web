import React from "react";
import { PropsWithChildrenClassName } from "../../types/react";

function H3Fill({ children, className }: PropsWithChildrenClassName) {
  return (
    <h2 className={"text-[13px] font-bold dark:text-primarywhite select-none " + className}>
      {children}
    </h2>
  );
}

export default H3Fill;
