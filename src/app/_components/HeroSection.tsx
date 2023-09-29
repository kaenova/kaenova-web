"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Variants, motion } from "framer-motion";

function HeroSection() {
  function handleClick() {
    if (!document) return;

    const elm = document.getElementById("here-to-help");
    elm?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: "15px" },
    show: { opacity: 1, y: "0px", transition: { duration: 0.75 } },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4 text-center">
      <button
        type="button"
        className=" bg-primary-btn rounded-full break-normal max-w-min px-4 py-2 hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all"
        onClick={handleClick}
      >
        <p className="whitespace-nowrap text-white font-bold text-xs md:text-sm">
          Open for collaboration
        </p>
      </button>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
          Kaenova{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-btn to-accent">
            Mahendra
          </span>{" "}
          Auditama
        </h1>
        <h2 className="text-white text-sm md:text-base">
          Backend, Machine Learning Engineer, DevOps Enthusiast
        </h2>
      </div>
      <div className="flex flex-row text-white">
        <motion.a
          variants={itemVariants}
          initial="hidden"
          animate="show"
          href="https://www.linkedin.com/in/kaenova/"
          className="px-4 py-2"
        >
          <Linkedin strokeWidth={1.5} />
        </motion.a>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          animate="show"
          href="https://github.com/kaenova"
          className="px-4 py-2"
        >
          <Github />
        </motion.a>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          animate="show"
          href="mailto:kaenova@gmail"
          className="px-4 py-2"
        >
          <Mail />
        </motion.a>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          animate="show"
          href="/assets/cv.pdf"
          className="px-4 py-2"
        >
          <Download />
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;
