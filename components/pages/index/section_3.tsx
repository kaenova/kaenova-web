import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { projectsData } from "../../../data/projects";
import ElevatedButton from "../../button/elevated_button";
import H2Fill from "../../typography/h2_fill";
import NormalText from "../../typography/normal_text";
import StrikeThroughH1 from "../../typography/strike_through_h1";

function IndexSection3() {
  const [More, setMore] = useState(false);
  const [Viewed, setViewed] = useState(false);
  const projectMoreThanThree = projectsData.length > 3;
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setViewed(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="mt-[30px] flex flex-col items-center min-h-[300px]"
    >
      <StrikeThroughH1 strike="Pro" normal="jects" className="mb-[18px]" />
      {projectsData.map((v, i) => {
        if (i > 2) return <></>;
        return (
          <Project
            key={i}
            idx={i}
            description={v.desc}
            name={v.judul}
            photo={v.img}
            inView={Viewed}
          />
        );
      })}

      {More &&
        projectsData.map((v, i) => {
          if (i < 3) return <></>;
          return (
            <Project
              key={i}
              idx={i - 2}
              description={v.desc}
              name={v.judul}
              photo={v.img}
              inView={Viewed}
            />
          );
        })}

      {projectMoreThanThree && !More && (
        <ElevatedButton text="More Projects" onClick={() => setMore(true)} />
      )}

      {More && (
        <ElevatedButton text="Collapse" onClick={() => setMore(false)} />
      )}
    </section>
  );
}

type ProjectProps = {
  idx: number;
  name: string;
  description: string;
  photo?: string;
  inView?: boolean;
};

function Project({
  idx,
  name,
  description,
  photo,
  inView = true,
}: ProjectProps) {

  // Handle strikethrough
  let nameLen = name.length
  let randomSlice = Math.random() * nameLen
  let strike = name.slice(0, randomSlice)
  let outline = name.slice(randomSlice, nameLen)

  return (
    <AnimatePresence>
      {inView && (
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
          }}
          animate={{
            y: "0",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: idx * 0.5,
          }}
          className="mb-[18px]"
        >
          <div className="h-[150px] w-full bg-secondarydark flex flex-col justify-center items-center">
            {photo != undefined ? (
              <img src={photo} className="object-cover h-[150px] w-full" />
            ) : (
              <StrikeThroughH1 strike={strike} normal={outline} />
            )}
          </div>
          <div className="flex flex-row items-center mt-[18px] min-h-[120px] ">
            <table>
              <tbody>
                <tr>
                  <td className="w-[30%]">
                    <H2Fill className="underline decoration-accent decoration-[3px]">
                      {name}
                    </H2Fill>
                  </td>
                  <td>
                    <NormalText>{description}</NormalText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IndexSection3;
