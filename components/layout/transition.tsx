import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

function Transition({ children }: PropsWithChildren) {
  const { asPath } = useRouter();

  const transitionVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const transition: Transition = {
    duration: 0.3,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={asPath}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Transition;
