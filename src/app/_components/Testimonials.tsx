"use client"

import React, { useEffect, useState } from 'react'
import { Testimonials as TestimonialsType, testimonials } from './testimonials_data'
import { twMerge } from 'tailwind-merge'
import shuffleArray from '../../utils/shuffleArray'
import { motion } from 'framer-motion'

function TestimonialsCard({ className, ...data }: TestimonialsType & { className?: string }) {
  return (
    <div className={twMerge('px-6 py-4 border border-secondary-btn flex flex-col rounded-md h-min hover:shadow-xl hover:shadow-secondary-btn/10 duration-200 transition-all hover:scale-105 ', className)}>
      <p className='text-white font-bold text-center'>{data.review}</p>
      <p className='text-secondary-btn text-center'>{data.name}</p>
    </div>
  )
}

function Testimonials() {
  const [Expanded, setExpanded] = useState(false)
  const [TestimonialsData, setTestimonialsData] = useState<TestimonialsType[]>([])

  useEffect(() => { setTestimonialsData(shuffleArray(testimonials)) }, [])

  return (
    <div className="flex flex-col mt-16 items-center gap-1 mx-7">
      <div className="w-full">
        <p className="text-2xl font-bold text-center text-white">Lot of "friends" have been helped</p>
        <p className="text-lg font-bold text-center text-white underline text-underline">This is what they say</p>
      </div>
      <motion.div
        animate={{
          gridTemplateRows: Expanded ? "1fr" : `0.12fr`
        }}
        style={{
          display: "grid",
        }}
        className={`relative transition-all ease-in-out overflow-hidden duration-1000 w-full`}>
        <div className="w-full flex flex-wrap items-center gap-4 justify-center py-9 px-2 min-h-0">
          {TestimonialsData.map((v, i) => <TestimonialsCard key={i} {...v} />)}
          {/* {TestimonialsData.map((v, i) => <p>Hello</p>)} */}
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2  w-full flex justify-center h-10 items-end bg-gradient-to-t from-background bg-transparent'>
          <button type='button' className=' bg-primary-btn rounded-full break-normal max-w-min px-9 py-1 whitespace-nowrap font-bold text-white hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all mb-5' onClick={() => { setExpanded(!Expanded) }}>Show {Expanded ? "Less" : "More"}</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials