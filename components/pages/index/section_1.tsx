import React from "react";
import { useCheckMobile } from "../../../utils/is_mobile";
import ElevatedButton from "../../button/elevated_button";
import Brand from "../../typography/brand";
import H1Fill from "../../typography/h1_fill";
import H1Outline from "../../typography/h1_outline";
import H3Fill from "../../typography/h3_fill";
//@ts-ignore
import Icon from "react-eva-icons";
import { motion } from "framer-motion";

function IndexSection1() {
  const isMobile = useCheckMobile();
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <div className="flex flex-col">
        <span className="relative flex flex-col w-[60px] justify-center items-center mb-[10px]">
          <Brand />
          <div className="h-[2px] w-full bg-accent" />
        </span>
        <span className="leading-tight">
          <span className="flex">
            <H1Fill>Kaenova</H1Fill>
            <H1Outline className="ml-2">Mahendra</H1Outline>
          </span>
          <H1Fill>Auditama</H1Fill>
        </span>
        <H3Fill className="mt-3">
          Web Developer • ML / DevOps Engineer Enthusiast{" "}
        </H3Fill>
        <ElevatedButton
          text="Contact"
          className="mt-[20px]"
          onClick={() => {
            var elm = document.getElementById("profile");
            elm?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div className="absolute bottom-32 right-0 z-[3]">
        <motion.button
          initial={{
            y: 0,
          }}
          animate={{
            y: 10,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onClick={() => {
            var elm = document.getElementById("section2");
            elm?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="select-none">
            <H3Fill className="dark:text-accent rotate-90 mb-1">
              More</H3Fill>
            <Icon
              fill="#00B7C3"
              name="arrow-ios-downward-outline"
              size="xlarge"
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
}

export default IndexSection1;
