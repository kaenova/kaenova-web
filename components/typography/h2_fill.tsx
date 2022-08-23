import React from "react";
import { PropsWithChildrenClassName } from "../../types/react";

function H2Fill({ children, className }: PropsWithChildrenClassName) {
  return (
    <h2 className={"text-[18px] font-bold dark:text-primarywhite " + className}>{children}</h2>
  );
}

export default H2Fill;
