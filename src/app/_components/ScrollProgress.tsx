"use client"

import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className='fixed top-0 left-0 right-0 origin-left h-1 w-screen bg-accent/80 z-10' style={{ scaleX }} ></motion.div>
  )
}

export default ScrollProgress