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
  const [ModalIsActive, setModalIsActive] = useState(false);
  const windowWidth = useWindowWidth();
  const [selected, setSelected] = useState(whatIDoVerb[0]);
  const dispatch = useDispatch(selectNavBar);
  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (windowWidth > tailwindBreakpoint["sm"]) {
      if (ModalIsActive != false) {
        setModalIsActive(false);
      }
    }
  }, [windowWidth]);

  useEffect(() => {
    console.log("Ini di sec2", inView);
    if (inView) {
      dispatch(onWhatIDo());
    }
  }, [inView]);

  const WhatIDoItem = ({ nama, isSelected, onClick }) => {
    return (
      <>
        <button
          onClick={onClick}
          className="relative flex flex-col justify-center items-center"
        >
          {isSelected ? (
            <>
              <motion.p
                className="text-[14px] font-bold z-[1]"
                animate={{ color: "#F7F7F7" }}
              >
                {nama}
              </motion.p>
              <motion.div
                className="text-[14px] font-bold absolute"
                animate={{
                  color: "#F7F7F7",
                  backgroundColor: "#353535",
                  height: "35px",
                  borderRadius: "9px",
                  width: "120%",
                }}
              ></motion.div>
            </>
          ) : (
            <motion.p className="text-[14px] font-bold">{nama}</motion.p>
          )}
        </button>
      </>
    );
  };

  const WhatIDoDescAndPhoto = ({ nama, key, visible }) => {
    return (
      <>
        {visible && (
          <motion.div
            key={key}
            className="sm:grid sm:grid-cols-2 sm:gap-[75px] sm:items-center sm:w-10/12 sm:max-w-[940px] sm:h-[394px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.63, ease: "easeInOut" }}
          >
            <div className="hidden sm:block">
              {" "}
              {/* Ini Bagian Kiri */}
              <div className="w-full h-full bg-blue-500">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
            </div>
            <div className="max-w-[420px]">
              {" "}
              {/* Ini Bagian Kanan */}
              <h2 className="text-[24px] font-bold mb-[15px] hidden sm:block">
                {nama}
              </h2>
              <p className="tracking-normal text-justify">
                {dataWhatIDo[nama]["deskripsi"]}
              </p>
              <div className="mt-[20px] flex flex-col gap-3 justify-center items-center sm:text-left sm:items-start">
                <h2 className="tracking-normal font-bold text-center text-[24px] sm:text-left">
                  Top Projects
                </h2>
                <a
                  href={dataWhatIDo[nama]["top1_link"]}
                  className="underline text-center sm:text-left tracking-normal"
                >
                  {dataWhatIDo[nama]["top1_nama"]}
                </a>
                <a
                  href={dataWhatIDo[nama]["top2_link"]}
                  className="underline text-center sm:text-left tracking-normal"
                >
                  {dataWhatIDo[nama]["top2_nama"]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </>
    );
  };

  return (
    <>
      <section
        ref={ref}
        id="idx_sec2"
        className="snap-start h-full relative flex flex-col justify-center items-center pl-[50px] pr-[50px]"
      >
        <h1 className="text-[24px] font-bold tracking-normal">What I Do?</h1>
        <div className=" mt-[24px] ">
          <button
            onClick={() => setModalIsActive(true)}
            className="bg-white rounded-[7px] shadow-md min-w-[306px] max-w-[420px] min-h-[43px] flex flex-row flex-grow justify-between items-center pr-[14px] select-none sm:hidden"
          >
            <p className="font-bold text-[14px] tracking-normal ml-[40px]">
              {selected}
            </p>
            <img
              className="w-[24px] h-[24px]"
              src="/menu-outline.svg"
              alt=""
              srcSet=""
            />
          </button>
          <div className="hidden sm:block">
            <AnimateSharedLayout>
              <div className="ml-2 mr-2 min-w-[500px] max-w-[710px] w-[100vw] h-[42px] bg-white shadow-md rounded-[7px] flex flex-row justify-between pl-[30px] pr-[30px] items-center">
                {whatIDoVerb.map((v) => (
                  <WhatIDoItem
                    key={v}
                    nama={v}
                    isSelected={selected === v}
                    onClick={() => setSelected(v)}
                  />
                ))}
              </div>
            </AnimateSharedLayout>
          </div>
        </div>
        <span className="mt-[25px]" />
        <AnimatePresence>
          {whatIDoVerb.map((v) => (
            <WhatIDoDescAndPhoto nama={v} key={v} visible={selected === v} />
          ))}
        </AnimatePresence>
        <div className="absolute bottom-[20px] w-full flex flex-col justify-center">
          <button
            onClick={() => document.getElementById("idx_sec3").scrollIntoView()}
            className="flex flex-col justify-center items-center select-none"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <motion.img
                animate={{ opacity: 0.1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-[47px] h-[47px] mt-[10px]"
                src="/arrow-ios-downward-outline.svg"
                alt=""
              />
            </motion.div>
          </button>
        </div>
      </section>
      <AnimatePresence>
        {ModalIsActive && (
          <motion.div
            className="fixed top-0 w-screen h-screen flex justify-center items-center z-[2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <div className="bg-white shadow-md min-w-[340px] max-w-[380px] min-h-[400px] max-h-[600px] rounded-2xl p-10 flex flex-col items-center justify-center relative z-[3]">
              <div className="flex flex-col">
                <p className="text-center text-[18px] font-bold border-b-2">
                  So, This is what I do
                </p>
                <div className="mt-10 grid grid-flow-row text-center gap-4 font-bold">
                  {whatIDoVerb.map((v) => {
                    return (
                      <button
                        key={v}
                        onClick={() => {
                          setSelected(v);
                          setModalIsActive(false);
                        }}
                        className={selected === v && "font-bold"}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => setModalIsActive(false)}
                className="absolute bottom-5 w-[24px] h-[24px] select-none"
              >
                <img src="/close-circle-outline.svg" alt="" className="" />
              </button>
            </div>
            <span
              onClick={() => setModalIsActive(false)}
              className="fixed top-0 h-full w-full backdrop-blur"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Section2Home;
