import React, { PropsWithChildren } from "react";

function NormalPadding({ children }: PropsWithChildren) {
  return <div className="px-[25px]">{children}</div>;
}

export default NormalPadding;
