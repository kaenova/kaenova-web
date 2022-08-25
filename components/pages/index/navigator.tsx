import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import H3Fill from "../../typography/h3_fill";

//@ts-ignore
import Icon from "react-eva-icons";
import { useCheckTop } from "../../../utils/is_top_bottom";

function Navigator() {
  const isTop = useCheckTop();

  function goToProfile() {
    var elm = document.getElementById("profile");
    elm?.scrollIntoView({ behavior: "smooth" });
  }

  function goToMore() {
    var elm = document.getElementById("section2");
    elm?.scrollIntoView({ behavior: "smooth" });
  }

  const navigatorAnimationVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="fixed bottom-4 right-5 z-[3]">
      <motion.button
        initial={{
          y: 0,
        }}
        animate={{
          y: 10,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        onClick={isTop ? goToMore : goToProfile}
      >
        <div>
          <AnimatePresence mode="wait">
            {isTop && (
              <motion.div
                key={0}
                layoutId="navigator"
                variants={navigatorAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.3,
                }}
              >
                <H3Fill className="dark:text-accent mb-4 rotate-90">
                  More
                </H3Fill>
              </motion.div>
            )}
            {!isTop && (
              <motion.div
                key={1}
                layoutId="navigator"
                variants={navigatorAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.3,
                }}
              >
                <H3Fill className="dark:text-accent mb-4 rotate-90">
                  Contact
                </H3Fill>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="select-none w-[50px]">
          <Icon
            fill="#00B7C3"
            name="arrow-ios-downward-outline"
            size="xlarge"
          />
        </div>
      </motion.button>
    </div>
  );
}

function TextWrapperComponent({
  isShow,
  text,
}: {
  isShow: boolean;
  text: string;
}) {
  return (
    <>
      {isShow && (
        <motion.div
          key={text}
          layoutId="navigator"
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: -100,
          }}
          transition={{
            duration: 1,
          }}
        >
          <H3Fill className="dark:text-accent mb-4 rotate-90">{text}</H3Fill>
        </motion.div>
      )}
    </>
  );
}

export default Navigator;
