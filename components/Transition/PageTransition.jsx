import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import * as animationData from '@Public/LoadingKMALogo.json'
import styles from './Transition.module.css'


function Content() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <span className={styles.lottie}>
        <Lottie
          options={defaultOptions}
        />
      </span>
    </>
  )
}

const config = {
  tailwindClass: "fixed top-0 w-screen h-screen bg-gray-400 z-40 flex justify-center items-center",

  motion: {
    motionVariantsOut: {
      initial: {
        y: 0
      },
      animate: {
        y: "-100vh"
      },
      transition: {
        duration: 0.3
      }
    },

    motionVariantsIn: {
      initial: {
        y: "-100vh"
      },
      animate: {
        y: 0
      },
      transition: {
        duration: 0.3
      }
    },
  }
}


export function PageTransition(props) {

  return (
    props.activate == "true" ? (
      <motion.div className={props.display == "true" ? (config.tailwindClass) : (config.tailwindClass + " hidden")}
        initial="initial"
        animate="animate"
        transition="transition"
        variants={!props.load ? config.motion.motionVariantsOut : config.motion.motionVariantsIn}
      >
        {Content()}
      </motion.div>
    )
      :
      <>
      </>
  )
}

