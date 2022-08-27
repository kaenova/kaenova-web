import Link from "next/link";
import React from "react";
import Brand from "../../typography/brand";
import StrikeThroughH1 from "../../typography/strike_through_h1";

function LiveHeader() {
  return (
    <span className="flex lg:flex-row flex-col p-5 gap-1">
      <Link href="/">
        <a>
          <div className="flex flex-col gap-0 items-center lg:items-start">
            <Brand />
            <StrikeThroughH1 strike="Li" normal="ve" />
          </div>
        </a>
      </Link>
    </span>
  );
}

export default LiveHeader;
