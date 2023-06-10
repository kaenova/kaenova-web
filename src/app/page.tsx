"use client"

import { Inter } from 'next/font/google'
import AboutMe from './modules/AboutMe'
import Hero from './modules/Hero'
import WhatCanIDo from './modules/WhatCanIDo'
import Experiences from './modules/Experiences'
import Projects from './modules/Projects'
import Testimonials from './modules/Testimonials'
import HereToHelp from './modules/HereToHelp'
import Footer from './modules/Footer'

const inter = Inter({ subsets: ['latin'] })

function BackToTop() {

  function handleClick() {
    if (!window) {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='flex flex-col mt-16 text-white text-center font-semibold'>
      <p>This is the end of the page</p>
      <p>Thank you for checking my website until the end 🌟</p>
      <button onClick={handleClick} type='button' className='text-white font-semibold text-center'>Back to top</button>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex items-center min-h-screen w-full flex-col bg-background">
      <div className='flex flex-col w-full max-w-5xl mb-16'>
        <Hero />
        <AboutMe />
        <WhatCanIDo />
        <Experiences />
        <Projects />
        <Testimonials />
        <HereToHelp />
        <BackToTop />
      </div>
      <Footer />
    </main>
  )
}
