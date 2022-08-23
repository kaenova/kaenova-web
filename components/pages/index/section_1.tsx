import { Container, Sprite, Stage, useTick } from "@inlet/react-pixi";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "../../../utils/window_size";
import LimitSizeLayout from "../../layout/limit_size";
import NormalPadding from "../../layout/normal_padding";
import Brand from "../../typography/brand";
import H1Fill from "../../typography/h1_fill";
import H1Outline from "../../typography/h1_outline";
import H3Fill from "../../typography/h3_fill";
import NormalText from "../../typography/normal_text";

function IndexSection1() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="relative">
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

        <div className="bg-secondarydark p-2 rounded-[5px] flex flex-col justify-center mt-5">
          <H3Fill className="text-center">
            Web currently under development
          </H3Fill>
          <span className="flex flex-row justify-center gap-2">
            <NormalText className="text-center">Click the</NormalText>
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
              width={20}
              height={20}
            />
          </span>
        </div>

        {/* <ElevatedButton text="More Info" className="mt-[20px]" /> */}
      </div>
    </div>
  );
}

export default IndexSection1;
