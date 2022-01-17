import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { dataWhatIDo } from "./dataWhatIDo";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { onWhatIDo, selectNavBar } from "../../redux/navbarSlice";

function Section2Home() {
  const tailwindBreakpoint = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    // All in pixels
  };

  const whatIDoVerb = Object.keys(dataWhatIDo);
  const { ref, inView, entry } = useInView({ threshold: 0.1 })

  return (
    <>
      <section
        ref={ref}
        id="idx_sec2"
        className="snap-start static px-[25px] h-full"
      >
        <div className="relative top-[70px] flex flex-col items-center">
          <h1 className="font-bold tracking-normal text-[24px]">
            Projects
          </h1>
          <a href="https://github.com/kaenova" className="bg-white w-[400px] h-[45px] rounded-full shadow-md flex flex-row justify-center items-center gap-5 mt-4">
            <img src="/github.svg" alt="" className="w-[24px]" />
            <p className="font-bold tracking-normal">
              Checkout my public projects
            </p>
          </a>
          <div className="flex flex-row w-[350px] justify-center mt-3">
            <div className="grid grid-flow-col gap-[100px]">
              <button className="flex flex-row items-center">
                <img src="/arrow-ios-back-outline.svg" alt="" />
                <p>Prev</p>
              </button>
              <button className="flex items-center flex-row-reverse">
                <img src="/arrow-ios-forward-outline.svg" alt="" />
                <p>Next</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2Home;
