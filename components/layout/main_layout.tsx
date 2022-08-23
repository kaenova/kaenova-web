import { AppProps } from "next/app";
import React, { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark h-full">
      <div className="dark:bg-primarydark justify-center flex">
        <div className="relative max-w-[640px] min-w-[360px] grow">
          <div className="px-[25px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
