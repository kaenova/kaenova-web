import React from "react";
import ElevatedButton from "../../button/elevated_button";
import Brand from "../../typography/brand";
import H1Fill from "../../typography/h1_fill";
import H1Outline from "../../typography/h1_outline";
import H3Fill from "../../typography/h3_fill";

function IndexSection1() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <span className="flex flex-col w-[60px] justify-center items-center mb-[10px]">
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

      <div className="bg-secondarydark p-2 rounded-[5px] flex flex-row justify-center mt-5">
      <H3Fill className="text-center">Web currently under development</H3Fill>
      </div>

      {/* <ElevatedButton text="More Info" className="mt-[20px]" /> */}
    </div>
  );
}

export default IndexSection1;
