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
            key={Math.random()}
            className="fixed top-0 w-screen h-screen flex justify-center items-center z-[2] px-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <div className="bg-white shadow-md min-w-[280px] max-w-[380px] min-h-[400px] max-h-[600px] rounded-2xl p-10 flex flex-col items-center justify-center relative z-[3]">
              <div className="flex flex-col">
                <p className="text-center text-[18px] font-bold border-b-2">
                  Where do you want to go?
                </p>
                <div className="mt-10 grid grid-flow-row text-center gap-4 font-bold">
                  {page.map((v) => {
                    return (
                      <button
                        onClick={() => {
                          document
                            .getElementById(dataSection[v]["section_name"])
                            .scrollIntoView();
                          setModalIsActive(false);
                        }}
                        key={Math.random()}
                        className={selected === v ? "font-bold" : ""}
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
      <div className=" fixed bg-white shadow-lg flex flex-col top-0 left-0 w-[93px] h-full justify-between items-center tracking-wide select-none invisible sm:visible z-[1] py-2">
        <img src="/Logo.svg" className="p-3" alt="asds" />
        <div className="grid grid-flow-row justify-center items-center gap-7 mb-12">
          {page.map((v) => {
            return (
              <div className="flex flex-row items-center group">
                <button
                  onClick={() =>
                    document
                      .getElementById(dataSection[v]["section_name"])
                      .scrollIntoView()
                  }
                  key={Math.random()}
                  className={[(selected == v) ? "font-bold text-center tracking-normal text-[24px] w-[43px] h-[43px] bg-[#C4C4C4] rounded-[7px] box-content" : "font-normal  text-center tracking-normal text-[24px] w-[43px] h-[43px] box-content"]}
                >
                  {v[0]}
                </button>
                <button className="bg-white fixed p-2 text-[18px] z-0 scale-0 group-hover:scale-100 left-[100px] rounded-md shadow-md transition-all duration-100">
                {v}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => setModalIsActive(true)}
        className="fixed top-[18px] right-[20px] w-[30px] h-[30px] p-1 sm:invisible select-none bg-white rounded-md shadow-md z-[1]"
      >
        <img src="/menu-outline.svg" alt="button" />
      </button>
    </>
  );
}

export default Navbar;
