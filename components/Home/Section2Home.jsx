

import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import * as animationData from '../../public/LoadingKMALogo.json'
import { useRouter } from 'next/router'

function Section2Home() {
  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const router = useRouter()
  return (
    <section id="idx_sec2" className="h-full relative flex flex-col justify-center items-center pl-[50px] pr-[50px]">
      <h1 className="text-[24px] font-bold tracking-normal">
        What I Do?
      </h1>
      <div>
        {/* TODO: ONCLICK MODAL HANDLER */}
        <button className="bg-white rounded-[7px] shadow-md min-w-[306px] max-w-[420px] min-h-[43px] flex flex-row flex-grow justify-between items-center pr-[14px] select-none mt-[24px]">
          <p className="font-bold text-[14px] tracking-normal ml-[40px]">
            Data Engineering
          </p>
          <img className="w-[24px] h-[24px]" src="/menu-outline.svg" alt="" srcset="" />
        </button>
        {/* TODO: Bagian Selection To Do */}
      </div>
      <div className="max-w-[420px] mt-[25px]">
        <p className="tracking-normal text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore corrupti earum nisi totam labore consequuntur expedita voluptatum eaque natus vitae nemo nulla at voluptate quis, adipisci facilis, repellat ducimus?
          Nostrum veritatis ratione, ipsum qua
        </p>
        <div className="mt-[40px] flex flex-col gap-3 justify-center items-center">
          <h2 className="tracking-heading font-bold text-center text-[24px]">
            Top Projects
          </h2>
          <a className="underline" href="">Project 1</a>
          <a className="underline" href="">Project 2</a>
        </div>
      </div>
    </section>
  )
}

export default Section2Home
