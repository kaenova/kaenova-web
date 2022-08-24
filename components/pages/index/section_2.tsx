import React from "react";
import { ExtendClassName } from "../../../types/react";
import StrikeThroughH1 from "../../typography/strike_through_h1";
import { brandPhoto } from "../../../data/experiences_img";
import Marquee from "react-fast-marquee";

function IndexSection2({ className }: ExtendClassName) {
  return (
    <section id="section2" className={"flex flex-col justify-center " + className}>
      <StrikeThroughH1 strike="Experi" normal="ences" />
      <PhotoMarquee direction={false} />
      <PhotoMarquee direction={true} />
    </section>
  );
}

function PhotoMarquee({ direction }: { direction: boolean }) {
  return (
    <div className="overflow-clip mt-[30px] ">
      <Marquee gradient={false} direction={direction ? "right" : "left"}>
        {brandPhoto.map((v, i) => {
          return (
            <div key={i} className="w-[100px] mx-4 flex justify-center items-center select-none">
              <img className="object-contain h-[50px]" src={v.url} />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default IndexSection2;
