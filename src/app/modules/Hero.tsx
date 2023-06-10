"use client"

import React from 'react'

function Hero() {
  function handleClick() {
    if (!document) return

    const elm = document.getElementById('here-to-help')
    elm?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className='min-h-screen w-full flex flex-col justify-center lg:items-start'>
      <div className='flex flex-col justify-center items-center text-center gap-6 lg:items-start lg:text-start'>
        <button type='button' className=' bg-primary-btn rounded-full break-normal max-w-min px-9 py-1 hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all' onClick={handleClick}>
          <p className='whitespace-nowrap text-white font-bold'>Open for collaboration</p>
        </button>
        <div>
          <p className='text-4xl text-white font-bold max-w-[28.688rem]'>Kaenova <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary-btn to-accent'>Mahendra</span> Auditama 👋</p>
        </div>
        <div>
          <p className='text-white text-xl'>Backend, Machine Learning Engineer</p>
          <p className='text-white text-xl'>DevOps Enthusiast</p>
        </div>
        <div className='flex flex-row gap-4'>
          <a href='https://www.linkedin.com/in/kaenova/' className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
            <p className='text-sm text-white font-semibold'>LinkedIn</p>
          </a>
          <a href='mailto:kaenova@gmail' className='px-8 py-3 rounded-md bg-secondary-btn hover:shadow-lg hover:shadow-secondary-btn/30 duration-200 transition-all'>
            <p className='text-sm font-semibold'>Contact Me via Email</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 