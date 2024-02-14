"use client";

import React, { useEffect, useState } from "react";
import {
  Testimonials as TestimonialsType,
  testimonials,
} from "../_data/testimonials_data";
import { twMerge } from "tailwind-merge";
import shuffleArray from "../../utils/shuffleArray";
import { motion } from "framer-motion";

function TestimonialsCard({
  className,
  ...data
}: TestimonialsType & { className?: string }) {
  return (
    <div
id="testimonials"
      className={twMerge(
        " flex flex-col rounded-md h-min hover:shadow-xl hover:shadow-secondary-btn/10 duration-200 transition-all hover:scale-105 border border-foreground/10 p-2",
        className
      )}
    >
      <p className="text-white text-sm md:text-base">{data.review}</p>
      <p className="text-secondary-btn font-bold text-sm md:text-base">
        {data.name}
      </p>
    </div>
  );
}

function TestimonialsSection() {
  const [Expanded, setExpanded] = useState(false);
  const [TestimonialsData, setTestimonialsData] = useState<TestimonialsType[]>(
    []
  );

  useEffect(() => {
    setTestimonialsData(testimonials);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full">
        <h1 className="text-xl text-center md:text-2xl font-bold text-white">
          I Do Some Mentoring Too!
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-center text-white">
          Here's what they say
        </h2>
      </div>
      <motion.div
        animate={{
          gridTemplateRows: Expanded ? "1fr" : `0.20fr`,
        }}
        style={{
          display: "grid",
        }}
        className={`relative transition-all ease-in-out overflow-hidden duration-1000 w-full p-2`}
      >
        <div className="w-full columns-2 min-h-0 pb-16 p-2">
          {TestimonialsData.map((v, i) => (
            <TestimonialsCard className="my-2" key={i} {...v} />
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-full flex justify-center h-10 items-end bg-gradient-to-t from-background bg-transparent">
          <button
            type="button"
            className=" bg-primary-btn rounded-full break-normal max-w-min px-4 py-2 whitespace-nowrap font-bold text-white hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all mb-5 text-sm"
            onClick={() => {
              setExpanded(!Expanded);
            }}
          >
            Show {Expanded ? "Less" : "More"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default TestimonialsSection;
