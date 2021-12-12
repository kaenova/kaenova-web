import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";


function Section2Home() {
  const tailwindBreakpoint = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    // All in pixels
  };

  const [ModalIsActive, setModalIsActive] = useState(false)
  const windowWidth = useWindowWidth();
  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth > tailwindBreakpoint["sm"]) {
      setModalIsActive(false);
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
                <p className="text-center">You found a shortcut ^^</p>
                <div className="mt-10 grid grid-flow-row text-center gap-4 font-bold">
                  <button>Data Engineering</button>
                  <button>Frontend</button>
                  <button>Backend</button>
                  <button>DevOps Engineer</button>
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
      <section id="idx_sec2" className="h-full relative flex flex-col justify-center items-center pl-[50px] pr-[50px]">
        <h1 className="text-[24px] font-bold tracking-normal">
          What I Do?
        </h1>
        <div className=' mt-[24px] '>
          {/* TODO: ONCLICK MODAL HANDLER */}
          <button onClick={() => setModalIsActive(true)} className="bg-white rounded-[7px] shadow-md min-w-[306px] max-w-[420px] min-h-[43px] flex flex-row flex-grow justify-between items-center pr-[14px] select-none sm:hidden">
            <p className="font-bold text-[14px] tracking-normal ml-[40px]">
              Data Engineering
            </p>
            <img className="w-[24px] h-[24px]" src="/menu-outline.svg" alt="" srcSet='' />
          </button>
          {/* TODO: Bagian Selection To Do */}
          <div className='hidden sm:block'>
            <div className='w-[772px] h-[42px] bg-white shadow-md rounded-[7px] flex flex-row justify-between pl-[34px] pr-[34px]'>
              <button className='text-[14px] font-bold'>Data Engineering</button>
              <button className='text-[14px] font-bold'>Frontend</button>
              <button className='text-[14px] font-bold'>Backend</button>
              <button className='text-[14px] font-bold'>DevOps Engineer</button>
            </div>
          </div>
        </div>
        <span className='mt-[25px]' />
        <div className='sm:grid sm:grid-cols-2 sm:gap-[75px] sm:items-center'>
          <div className='hidden sm:block sm:bg-red-500'> {/* Ini Bagian Kanan */}
            <div className='w-full h-full bg-blue-500'>
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </div>
          <div className="max-w-[420px]"> {/* Ini Bagian Kanan */}
            <h2 className='text-[24px] font-bold mb-[15px] hidden sm:block'>Data Engineering</h2>
            <p className="tracking-normal text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore corrupti earum nisi totam labore consequuntur expedita voluptatum eaque natus vitae nemo nulla at voluptate quis, adipisci facilis, repellat ducimus? Ini maksimal
            </p>
            <div className="mt-[20px] flex flex-col gap-3 justify-center items-center sm:text-left sm:items-start">
              <h2 className="tracking-heading font-bold text-center text-[24px] sm:text-left">
                Top Projects
              </h2>
              <a className="underline tracking-normal" href="">Project 1</a>
              <a className="underline tracking-normal" href="">Project 2</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[20px] w-full flex flex-col justify-center">
          <button onClick={() => document.getElementById("idx_sec2").scrollIntoView()} className="flex flex-col justify-center items-center select-none">
            <motion.div
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.90 }}
            >
              <motion.img
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                className="w-[47px] h-[47px] mt-[10px]" src="/arrow-ios-downward-outline.svg" alt="" />
            </motion.div>
          </button>
        </div>
      </section>
    </>
  )
}

export default Section2Home
