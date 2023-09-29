"use client";

import { motion, Variants } from "framer-motion";
import { ExperienceData } from "../_data/experiences_data";

function ExperienceCard({
  title,
  where,
  when,
  desc,
}: {
  title: string;
  where: string;
  when: string;
  desc: string;
}) {
  const variant: Variants = {
    offscreen: {
      opacity: "0%",
    },
    onscreen: {
      opacity: "100%",
    },
  };

  return (
    <motion.div
      // variants={variant}
      // initial="offscreen"
      // whileInView="onscreen"
      transition={{ ease: "easeIn" }}
      viewport={{ once: true, amount: 0.7 }}
      className="flex flex-col w-full md:pl-4"
    >
      <div>
        <h2 className="text-white text-base md:text-xl font-bold">{title}</h2>
        <div>
          <p className="text-secondary-btn text-sm  font-bold">{where}</p>
          <p className="text-secondary-btn text-sm">{when}</p>
        </div>
      </div>
      <p className="text-secondary-btn text-sm ">{desc}</p>
    </motion.div>
  );
}

function ExperiencesSection() {
  return (
    <section className="flex flex-col items-center gap-2">
      <div className="w-full">
        <h1 className="text-xl md:text-2xl font-bold text-left text-white">
          Experiences
        </h1>
      </div>
      <div className="md:border-l md:border-l-primary-btn flex flex-col gap-4">
        {ExperienceData.map((v, i) => (
          <ExperienceCard
            key={i}
            title={v.title}
            where={v.where}
            when={v.when}
            desc={v.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperiencesSection;
