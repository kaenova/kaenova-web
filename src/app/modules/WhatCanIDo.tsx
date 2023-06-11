"use client"

import React from 'react'
import { block } from 'million'
import { twMerge } from 'tailwind-merge'
import { Variants, motion } from 'framer-motion'

function OutlineSkillData({ heading, subheading, className }: { heading: string, subheading: string, className?: string }) {
  const variant: Variants = {
    offscreen: {
      y: 100,
      opacity: "0%"
    },
    onscreen: {
      y: 0,
      opacity: "100%"
    }
  }

  return (
    <motion.div
      variants={variant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
      className={twMerge('px-6 py-4 border border-secondary-btn flex flex-col rounded-md h-min', className)}>
      <p className='text-white font-bold'>{heading}</p>
      <p className='text-secondary-btn'>{subheading}</p>
    </motion.div>
  )
}

function WhatCanIDo() {
  return (
    <div className='flex flex-col mt-16 items-center gap-6 mx-7'>
      <div>
        <button type='button'>
          <p className='text-4xl font-bold text-center text-white underline'>What Can I Do For You?</p>
        </button>
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <OutlineSkillData heading='Data & ML Engineering' subheading='TensorFlow, PyTorch, Scikit-Learn' />
        <OutlineSkillData heading='Web Development' subheading='Next.js, TailwindCSS' className='hidden lg:block' />
        <OutlineSkillData heading='Data Science & Analytics' subheading='Pandas, Matplotlib, NumPy' />
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <OutlineSkillData heading='Full-Stack Development' subheading='Python, Go, Typescript, Next.js, Echo' />
        <OutlineSkillData heading='Web Development' subheading='Next.js, TailwindCSS' className='lg:hidden' />
        <OutlineSkillData heading='Containerization' subheading='Docker, Swarm, Kubernetes' className='hidden lg:block' />
      </div>

      <div className='lg:hidden'>
        <OutlineSkillData heading='Containerization' subheading='Docker, Swarm, Kubernetes' />
      </div>
    </div>
  )
}

export default WhatCanIDo