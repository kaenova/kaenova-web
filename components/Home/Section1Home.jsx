import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "../../public/LoadingKMALogo.json";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { onHead, selectNavBar } from "../../redux/navbarSlice";

function Section1Home() {
  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch(selectNavBar);

  const { ref, inView, entry } = useInView({ threshold: 0.3 });

  useEffect(() => {
    console.log("Ini di sec1", inView);
    if (inView) {
      dispatch(onHead());
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="idx_sec1"
      className="snap-center h-full relative flex flex-col"
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div className="absolute flex flex-col justify-center items-center">
          <span className="relative left-[-0.25em] animation">
            <Lottie
              options={animationOption}
              height={100}
              width={100}
              style={{ color: "#F7F7F7" }}
            />
          </span>
          <motion.h1
            initial={{
              letterSpacing: "0.001em",
            }}
            animate={{
              letterSpacing: "0.305em",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center text-[24px] tracking-heading font-bold "
          >
            KMA
          </motion.h1>
          <motion.h2
            initial={{
              letterSpacing: "0.4em",
            }}
            animate={{
              letterSpacing: "0.105em",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center tracking-normal"
          >
            Kaenova Mahendra Auditama
          </motion.h2>
          <div className="w-[206px] flex flex-row justify-between mt-[28px] select-none">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kaenova"
              className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center"
            >
              <img className="w-[29px] h-[29px]" src="/github.svg" alt="" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kaenova/"
              className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center"
            >
              <img className="w-[29px] h-[29px]" src="/linkedin.svg" alt="" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://mobile.twitter.com/kaenovama"
              className="bg-white shadow-md rounded-[11px] w-[47.76px] h-[47.76px] flex flex-col justify-center items-center"
            >
              <img className="w-[29px] h-[29px]" src="/twitter.svg" alt="" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[40px] w-full flex flex-col justify-center">
        <button
          onClick={() => document.getElementById("idx_sec2").scrollIntoView()}
          className="flex flex-col justify-center items-center select-none"
        >
          <p className="text-[14px] text-center">What I Do?</p>
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
  );
}

export default Section1Home;
