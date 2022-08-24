import React from "react";

type StrikeThroughH1Props = {
  strike: string,
  normal: string
}

function StrikeThroughH1({strike, normal} : StrikeThroughH1Props) {
  return (
    <h1 className="flex flex-row">
      <div className="relative">
        <p className="text-[35px] font-bold dark:text-primarywhite line-through decoration-accent decoration-[5px]">
          {strike}
        </p>
      </div>
      <span className="text-[35px] font-bold dark:text-stroke-primarywhite text-transparent text-stroke-1">
        {normal}
      </span>
    </h1>
  );
}

export default StrikeThroughH1;