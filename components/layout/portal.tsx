import React, { PropsWithChildren } from "react";

export const portalId = "react-portal";

function PortalWrapper({ children }: PropsWithChildren) {
  return (
    <>
    <span id={portalId} className=""></span>
    {children}
    </>
  );
}

export default PortalWrapper;
