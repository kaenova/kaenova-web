import { AppProps } from "next/app";
import React, { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark h-full">
      <div className="dark:bg-primarydark relative">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
