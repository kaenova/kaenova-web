"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

function OutlineSkillData({
  heading,
  subheading,
  className,
}: {
  heading: string;
  subheading: string;
  className?: string;
}) {
  const variant: Variants = {
    offscreen: {
      y: 100,
      opacity: "0%",
    },
    onscreen: {
      y: 0,
      opacity: "100%",
    },
  };

  return (
    <motion.div
      // variants={variant}
      // initial="offscreen"
      // whileInView="onscreen"
      // transition={{ ease: "easeIn" }}
      // viewport={{ once: true, amount: 0.9 }}
      className={twMerge(
        "px-4 py-2 flex flex-col rounded-md h-min text-center",
        className
      )}
    >
      <p className="text-foreground font-bold">{heading}</p>
      <p className="text-secondary-btn text-sm md:text-base">{subheading}</p>
    </motion.div>
  );
}

function StackIUseSection() {
  return (
    <section className="flex flex-col items-center gap-2">
      <h1 className="text-xl md:text-2xl font-bold text-foreground">
        Stack I Use
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-3xl">
        <OutlineSkillData
          heading="Data & ML Engineering"
          subheading="TensorFlow, PyTorch, Scikit-Learn"
        />
        <OutlineSkillData
          heading="Data Science & Analytics"
          subheading="Pandas, Matplotlib, NumPy"
        />
        <OutlineSkillData
          heading="Full-Stack Development"
          subheading="Python, Go, Typescript"
        />
        <OutlineSkillData
          heading="Web Development"
          subheading="Next.js, TailwindCSS"
        />
        <OutlineSkillData
          heading="Orchestration"
          subheading="Docker, Swarm, Kubernetes"
        />
      </div>
    </section>
  );
}

export default StackIUseSection;
