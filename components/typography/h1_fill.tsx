import React, { PropsWithChildren } from "react";
import { PropsWithChildrenClassName } from "../../types/react";

function H1Fill({ children, className }: PropsWithChildrenClassName) {
  return (
    <h1 className={"text-[35px] font-bold dark:text-primarywhite select-none " + className}>{children}</h1>
  );
}

export default H1Fill;
