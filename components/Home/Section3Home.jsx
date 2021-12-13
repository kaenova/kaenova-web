import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "../../public/LoadingKMALogo.json";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { selectNavBar, onContact } from "../../redux/navbarSlice";

function Section3Home() {
  const dispatch = useDispatch(selectNavBar);

  const { ref, inView, entry } = useInView({ threshold: 0.3 });

  useEffect(() => {
    console.log("Ini di sec3", inView);
    if (inView) {
      dispatch(onContact());
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="idx_sec3"
      className="snap-center h-full relative flex flex-col justify-center items-center px-[30px]"
    >
      <h1 className="font-bold tracking-normal text-[24px] sm:hidden">
        Contact Me!
      </h1>
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <img
          src="/profile-min.png"
          alt=""
          className="shadow-md w-[145px] rounded-[27px] mt-[18px] sm:w-[242px] sm:rounded-[50%] sm:mr-[90px] select-none"
        />
        <div className="flex flex-col justify-center items-center sm:w-[501px]">
          <div className="max-w-[284px] mt-[35px] tracking-normal sm:w-auto sm:max-w-none">
            <h1 className="font-bold tracking-normal text-[24px] hidden sm:block sm:mb-[13px]">
              Contact Me!
            </h1>
            <p className="text-[14px]">
              You’re reaching the end of my website! If you want to know more
              about me, don’t hesitate to get in touch with me using Email or
              LinkedIn! Oh yeah more website features are comings, come again
              later!
            </p>
            <p className="mt-[18px] text-[14px]">• Kaenova Mahendra Auditama</p>
          </div>
          <div className="flex w-[181px] flex-row justify-between items-center mt-[30px] sm:w-full sm:justify-start select-none">
            <motion.a
              href="mailto:kaenova@gmail.com"
              className="bg-white shadow-md w-[62px] h-[39px] rounded-[11px] flex flex-row justify-center items-center sm:w-[179px] sm:px-[13px] sm:justify-between sm:mr-[31px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/email.svg" alt="" className="w-[35px] sm:w-[29px]" />
              <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center flex-grow">
                <p>Email</p>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kaenova/"
              className="bg-white shadow-md w-[62px] h-[39px] rounded-[11px] flex flex-row justify-center items-center sm:w-[179px] sm:px-[13px] sm:justify-between"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/linkedin.svg"
                alt=""
                className="w-[35px] sm:w-[29px]"
              />
              <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center flex-grow">
                <p>LinkedIn</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3Home;
