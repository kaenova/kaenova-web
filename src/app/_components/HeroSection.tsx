"use client";

import React from "react";

function HeroSection() {
  function handleClick() {
    if (!document) return;

    const elm = document.getElementById("here-to-help");
    elm?.scrollIntoView({
      behavior: "smooth",
    });
  }

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
      <div className="flex flex-row gap-4">
        <a
          href="https://www.linkedin.com/in/kaenova/"
          className="px-4 py-2 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all"
        >
          <p className="text-sm text-white font-semibold">LinkedIn</p>
        </a>
        <a
          href="mailto:kaenova@gmail"
          className="px-4 py-2 rounded-md bg-secondary-btn hover:shadow-lg hover:shadow-secondary-btn/30 duration-200 transition-all h-fit w-fit"
        >
          <p className="text-sm font-semibold">Contact Me via Email</p>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
