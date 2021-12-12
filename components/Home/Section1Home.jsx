import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import * as animationData from '../../public/LoadingKMALogo.json'
import { useRouter } from 'next/router'

function Section1Home() {
  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const router = useRouter()

  return (
    <section className="h-full relative flex flex-col">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="absolute flex flex-col justify-center items-center">
          <span className="relative left-[-0.25em] animation">
            <Lottie options={animationOption}
              height={100}
              width={100}
              style={{color:"#F7F7F7"}}
            />
          </span>
          <p className="text-center text-[24px] tracking-heading font-bold ">KMA</p>
          <p className="text-center tracking-normal">Kaenova Mahendra Auditama</p>
          <div className="w-[206px] flex flex-row justify-between mt-[28px]">
            <motion.a
            whileHover={{scale:1.05}}
            whileTap={{scale:0.9}}
            href="https://github.com/kaenova"
            className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center">
              <img className="w-[29px] h-[29px]" src="/github.svg" alt="" />
            </motion.a>
            <motion.a
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            href="https://www.linkedin.com/in/kaenova/"
            className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center">
              <img className="w-[29px] h-[29px]" src="/linkedin.svg" alt="" />
            </motion.a>
            <motion.a
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            href="https://mobile.twitter.com/kaenovama"
            className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center">
              <img className="w-[29px] h-[29px]" src="/twitter.svg" alt="" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[40px] w-full flex flex-col justify-center">
        <button className="flex flex-col justify-center items-center select-none">
          <p className="text-[14px] text-center">What I Do?</p>
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
  )
}

export default Section1Home
