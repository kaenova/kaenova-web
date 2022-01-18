import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { onProject, selectNavBar } from "../../redux/navbarSlice";
import data from "./dataProjects";

function renderProjectsMobile() {
  const [idx, setIdx] = useState(0)
  const max = data.length
  return (
    <>
      <div className="flex flex-col items-center md:hidden">
        <h1 className="font-bold tracking-normal text-[24px] md:text-[28px]">
          Projects
        </h1>
        <a href="https://github.com/kaenova" className="bg-white w-[300px] h-[45px] rounded-full shadow-md flex flex-row justify-center items-center gap-5 mt-4 select-none">
          <img src="/github.svg" alt="" className="w-[24px]" />
          <p className="text-[12px] font-bold tracking-normal">
            Checkout my public projects
          </p>
        </a>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col items-center h-full">
        <div className="flex flex-row w-[350px] justify-center mt-3 select-none">
          <div className="grid grid-flow-col gap-[100px]">
            <button onClick={() => { (idx != 0) && setIdx(idx - 1) }} className={"flex flex-row items-center " + [(idx == 0) && "opacity-50 cursor-default"]}>
              <img src="/arrow-ios-back-outline.svg" alt="" />
              <p>Prev</p>
            </button>
            <button onClick={() => { (idx != max - 1) && setIdx(idx + 1) }} className={"flex items-center flex-row-reverse " + [(idx == max - 1) && "opacity-50 cursor-default"]}>
              <img src="/arrow-ios-forward-outline.svg" alt="" />
              <p>Next</p>
            </button>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          {/* IMG */}
          <div className="border-2 border-black-template w-[360px] rounded-md mt-3 select-none">
            <img src={data[idx]["img"]} alt="" srcset="" className="object-fill rounded-md" />
          </div>
          {/*  Judul */}
          <h2 className="font-bold tracking-normal text-[24px] mt-3">
            {data[idx]["judul"]}
          </h2>

          {/* Description */}
          <p className="mt-3 text-[14px]">
            {data[idx]["desc"]}
          </p>

          {/* In Charge of */}
          <p className="w-full mt-3 text-[14px]">
            Kaenova is in charge of:
            {data[idx]["charge"].map(v => {
              return (
                <li>{v}</li>
              )
            })}
          </p>

          {/* Details Link */}
          <a href={data[idx]["link"]} className="bg-white p-3 mt-3 shadow-md rounded-md w-[147px] flex flex-row items-center justify-center">
            More Details
          </a>
        </div>
      </div>
    </>
  )
}

function renderProjectDesktop() {
  return (
    <div className="hidden md:block mt-3">
      <div className="flex flex-col items-center md:items-end md:flex-row-reverse md:gap-5 md:self-end">
        <h1 className="font-bold tracking-normal text-[24px] md:text-[28px]">
          Projects
        </h1>
        <a href="https://github.com/kaenova" className="bg-white w-[300px] h-[45px] rounded-full shadow-md flex flex-row justify-center items-center gap-5 mt-4 select-none">
          <img src="/github.svg" alt="" className="w-[24px]" />
          <p className="text-[12px] font-bold tracking-normal">
            Checkout my public projects
          </p>
        </a>
      </div>
      {/* Start Component */}
      {data.map((v, idx) => {
        return (
          <div className={"h-[383px] flex flex-row gap-2 mb-11 " + [(idx % 2 != 0) && "flex-row-reverse"]}>
            <div className="flex flex-row items-center justify-center rounded-md p-3 mr-5">
              <img className="object-cover h-[300px] border-4 border-black-template rounded-md" src={data[idx]["img"]} alt="" />
            </div>
            <div className="flex flex-col justify-between max-w-[800px]">
              <h2 className="font-bold tracking-normal text-[30px]">
                {data[idx]["judul"]}
              </h2>

              <p className="text-[14px]">
                {data[idx]["desc"]}
              </p>

              <p className="text-[14px]">
                Kaenova is in charge of:
                {data[idx]["charge"].map(v => {
                  return (
                    <li>{v}</li>
                  )
                })}
              </p>

              <a href={data[idx]["link"]} className="bg-white p-3 shadow-md rounded-md w-[160px] flex flex-row items-center justify-center self-center font-bold gap-3">
                More Details
                <img src="/arrow-forward-outline.svg" className="w-[20px]" alt="" />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Section2Home() {
  const dispatch = useDispatch(selectNavBar);
  const { ref, inView, entry } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      dispatch(onProject());
    }
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        id="idx_sec2"
        className="snap-start static px-[25px] h-full md:h-fit"
      >
        <div className="mt-[20px] flex flex-col items-center h-full w-full">
          {renderProjectsMobile()}
          {renderProjectDesktop()}
        </div>
      </section>
    </>
  );
}

export default Section2Home;
