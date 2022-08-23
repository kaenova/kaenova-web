import React, { PropsWithChildren } from "react";

function LimitSizeLayout({ children }: PropsWithChildren) {
  return (
    <div className=" justify-center flex">
      <div className="relative max-w-[640px] min-w-[360px] grow">
        {children}
      </div>
    </div>
  );
}

export default LimitSizeLayout;
