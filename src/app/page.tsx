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
import BackToTop from './modules/BackToTop'
import ScrollProgress from './modules/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ScrollProgress />
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
    </>
  )
}
