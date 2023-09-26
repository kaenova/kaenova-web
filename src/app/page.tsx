"use client"

import { Inter } from 'next/font/google'
import AboutMe from './_components/AboutMe'
import Hero from './_components/Hero'
import WhatCanIDo from './_components/WhatCanIDo'
import Experiences from './_components/Experiences'
import Projects from './_components/Projects'
import Testimonials from './_components/Testimonials'
import HereToHelp from './_components/HereToHelp'
import Footer from './_components/Footer'
import BackToTop from './_components/BackToTop'
import ScrollProgress from './_components/ScrollProgress'

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
