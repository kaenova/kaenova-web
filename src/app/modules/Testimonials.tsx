"use client"

import React, { useState } from 'react'
import { Testimonials as TestimonialsType, testimonials } from './testimonials_data'
import { twMerge } from 'tailwind-merge'

function TestimonialsCard({ className, ...data }: TestimonialsType & { className?: string }) {
  return (
    <div className={twMerge('px-6 py-4 border border-secondary-btn flex flex-col rounded-md h-min hover:shadow-xl hover:shadow-secondary-btn/10 duration-200 transition-all  ', className)}>
      <p className='text-white font-bold text-center'>{data.review}</p>
      <p className='text-secondary-btn text-center'>{data.name}</p>
    </div>
  )
}


function Testimonials() {
  const [Expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col mt-16 items-center gap-6 mx-7">
      <div className="w-full">
        <p className="text-2xl font-bold text-center text-white">Lot of "friends" have been helped</p>
        <p className="text-lg font-bold text-center text-white underline text-underline">This is what they say</p>
      </div>
      <div className={`relative transition-all ease-in-out overflow-hidden duration-1000 ${!Expanded ? 'max-h-64' : 'max-h-min'} `}>
        <div className="w-full flex flex-wrap items-center gap-4 justify-center pb-9">
          {testimonials.map((v, i) => <TestimonialsCard key={i} {...v} />)}
        </div>
        {
          !Expanded &&
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2  w-full flex justify-center h-10 items-end bg-gradient-to-t from-background bg-transparent'>
            <button type='button' className=' bg-primary-btn rounded-full break-normal max-w-min px-9 py-1 whitespace-nowrap font-bold text-white hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all mb-5' onClick={() => { setExpanded(!Expanded) }}>Show More</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Testimonials