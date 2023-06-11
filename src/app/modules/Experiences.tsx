"use client"

import { motion, Variants } from "framer-motion"
import { ExperienceData } from "./experiences_data"


function ExperienceCard(
  { title, where, when, desc }:
    { title: string, where: string, when: string, desc: string }
) {

  const variant: Variants = {
    offscreen: {
      opacity: "0%"
    },
    onscreen: {
      opacity: "100%"
    }
  }


  return (
    <motion.div
      variants={variant}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ ease: "easeIn" }}
      viewport={{ once: true, amount: 0.7 }}
      className="flex flex-col w-full px-6 py-4 gap-2">
      <div>
        <p className="text-white text-xl font-bold">{title}</p>
        <div>
          <p className="text-secondary-btn font-bold">{where}</p>
          <p className="text-secondary-btn">{when}</p>
        </div>
      </div>
      <p className="text-secondary-btn">{desc}</p>
    </motion.div>
  )
}

function Experiences() {
  return (
    <div className='flex flex-col mt-16 items-center gap-6 mx-7'>
      <div className="w-full">
        <button type='button'>
          <p className='text-4xl font-bold text-left text-white'>Experiences</p>
        </button>
      </div>
      <div className="border-l border-l-primary-btn">
        {
          ExperienceData.map((v, i) => <ExperienceCard
            key={i}
            title={v.title}
            where={v.where}
            when={v.when}
            desc={v.desc}
          />)
        }
      </div>
    </div>
  )
}

export default Experiences