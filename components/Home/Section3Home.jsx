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
      className="snap-center h-full relative flex flex-col"
    >
      Hello World
    </section>
  );
}

export default Section3Home;
