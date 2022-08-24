import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchBlog } from "../../../networks/client/blog";
import H2Fill from "../../typography/h2_fill";
import H3Fill from "../../typography/h3_fill";
import NormalText from "../../typography/normal_text";
import StrikeThroughH1 from "../../typography/strike_through_h1";
import { motion } from "framer-motion";
//@ts-ignore
import Icon from "react-eva-icons";

function IndexSection4() {
  return (
    <section className="relative mt-[30px]">
      <StrikeThroughH1 strike="Acti" normal="vities" className="mb-[18px]" />
      <LatestBlogs />
      <SpotifyPlayed />
      <LiveStreaming />
      <div className="w-full h-[150px]"></div>

      <div className="absolute bottom-4 right-0 z-[2]">
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
            var elm = document.getElementById("profile");
            elm?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>
            <H3Fill className="dark:text-accent rotate-90 mb-2">Contact</H3Fill>
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

// Live Streaming
function LiveStreaming() {
  return (
    <div className="flex flex-col items-center">
      <H2Fill className="text-center mb-[18px]">Live Streaming</H2Fill>
      <StreamingOffline />
    </div>
  );
}

function StreamingOffline() {
  return (
    <div className="bg-secondarydark w-[160px] h-[30px] flex flex-row rounded-[5px] justify-center items-center gap-2">
      <div className="h-[20px] w-[20px] bg-thirddark rounded-full"></div>
      <H3Fill>Currently offline</H3Fill>
    </div>
  );
}

// Spotify
function SpotifyPlayed() {
  return (
    <div className="flex flex-col mb-[30px]">
      <H2Fill className="text-center mb-[18px]">Spotify</H2Fill>
      <NormalText className="text-center dark:text-thirddark">
        by Natemoo-re
      </NormalText>
      <img src="https://natemoo-re-git-master-kaenova.vercel.app/now-playing" />
    </div>
  );
}

// Blogs
function LatestBlogs() {
  return (
    <div className="flex flex-col">
      <H2Fill className="text-center mb-[18px]">Latest Blogs</H2Fill>
      <BlogsWrapper />
    </div>
  );
}

function BlogsWrapper() {
  const query = useQuery(["todos"], fetchBlog);

  if (!query.isSuccess) {
    return (
      <>
        {[...Array(3)].map((_, i) => (
          <BlogsPlaceholder key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {query.data.map((v, i) => {
        return (
          <Blogs
            key={i}
            date={new Date(v.createdAt)}
            title={v.title}
            redirect={v.link}
          />
        );
      })}
    </>
  );
}

function Blogs({
  date,
  title,
  redirect,
}: {
  date: Date;
  title: string;
  redirect?: string;
}) {
  return (
    <a
      href={redirect}
      className="w-full z-[2] bg-secondarydark flex flex-col px-[30px] py-[19px] rounded-[5px] mb-[18px]"
    >
      <div className="w-full">
        <H3Fill className="text-center">{title}</H3Fill>
        <NormalText className="text-center">
          {date.toLocaleDateString()}
        </NormalText>
      </div>
    </a>
  );
}

function BlogsPlaceholder() {
  return (
    <div className="z-[2] w-full bg-secondarydark flex flex-col px-[30px] py-[19px] rounded-[5px] mb-[18px]">
      <div className="w-full animate-pulse flex flex-col items-center">
        <div className="h-[15px] w-[80%]  rounded-[5px] bg-thirddark mb-[5px]"></div>
        <div className="h-[15px] w-[40%]  rounded-[5px] bg-thirddark"></div>
      </div>
    </div>
  );
}

export default IndexSection4;
