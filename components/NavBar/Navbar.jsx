import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";
import { selectNavBar } from "../../redux/navbarSlice";
import { motion, AnimatePresence } from "framer-motion";
import { dataSection } from "./dataNavbar";

function Navbar() {
  const tailwindBreakpoint = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    // All in pixels
  };

  const windowWidth = useWindowWidth();
  const [ModalIsActive, setModalIsActive] = useState(false);
  const page = Object.keys(dataSection); // Ini harus di sinkronkan dengan state pada navbarSlice
  const selected = useSelector(selectNavBar);

  useEffect(() => {
    if (windowWidth > tailwindBreakpoint["sm"]) {
      if (ModalIsActive == true) {
        setModalIsActive(false);
      }
    }
  }, [windowWidth]);

  return (
    <>
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
                  Where do you want to go?
                </p>
                <div className="mt-10 grid grid-flow-row text-center gap-4 font-bold">
                  {page.map((v) => {
                    return (
                      <>
                        <button
                          onClick={() => {
                            document
                              .getElementById(dataSection[v]["section_name"])
                              .scrollIntoView();
                            setModalIsActive(false);
                          }}
                          key={v}
                          className={selected === v ? "font-bold" : ""}
                        >
                          {v}
                        </button>
                      </>
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
      <div className="fixed bg-white shadow-lg flex flex-row items-end top-0 right-0 w-[450px] h-[50px] justify-between rounded-bl-[18px] pb-[13px] pl-[50px] pr-[30px] tracking-wide select-none invisible sm:visible z-[1]">
        {page.map((v) => {
          return (
            <>
              <button
                onClick={() =>
                  document
                    .getElementById(dataSection[v]["section_name"])
                    .scrollIntoView()
                }
                key={v}
                className={[(selected == v) ? "font-bold tracking-normal text-[14px]" : "tracking-normal text-[14px]"]}
              >
                {v}
              </button>
            </>
          );
        })}
      </div>
      <button
        onClick={() => setModalIsActive(true)}
        className="fixed top-[18px] right-[20px] w-[24px] h-[24px] sm:invisible select-none z-[1]"
      >
        <img src="/menu-outline.svg" alt="button" />
      </button>
    </>
  );
}

export default Navbar;
