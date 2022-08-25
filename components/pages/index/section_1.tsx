import React from "react";
import { useCheckMobile } from "../../../utils/is_mobile";
import ElevatedButton from "../../button/elevated_button";
import Brand from "../../typography/brand";
import H1Fill from "../../typography/h1_fill";
import H1Outline from "../../typography/h1_outline";
import H3Fill from "../../typography/h3_fill";

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
    </section>
  );
}

export default IndexSection1;
