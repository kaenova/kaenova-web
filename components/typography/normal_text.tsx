import React, { PropsWithChildren } from "react";
import { PropsWithChildrenClassName } from "../../types/react";

function NormalText({ children, className }: PropsWithChildrenClassName) {
  return <p className={"text-[13px] dark:text-primarywhite " + className}>{children}</p>;
}

export default NormalText;
