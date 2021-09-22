import React from 'react'
import { motion } from 'framer-motion'


function Content(){
  return (
    <>
    <motion.p>
    Hello this is from Initial Page!
    </motion.p>
    </>
  )
}

const config = {
  activate : true,
  tailwindClass : "fixed top-0 w-screen h-screen bg-white z-50 flex items-center justify-center",
  motion: {
    initial: {
      y: 0
    },
    animate: {
      y : "-100vh"
    },
    transition: {
      duration: 3,
      delay: 3,
      ease: [.61,.01,.26,.99] // This is how to use cubic bezier
    }
  }
}

export function InitialPage(props) {
  return (
    props.activate=="true" ?
    <motion.div
        className={config.tailwindClass} 
        initial="initial"
        animate="animate"
        transition={config.motion.transition} // I can't get it working with variants. Bug?
        variants={config.motion}
      >
        {Content()}
      </motion.div> 
    :
    <>
    </>
  )
}