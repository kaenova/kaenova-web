import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LimitSizeLayout from "../layout/limit_size";
import MainLayout from "../layout/main_layout";
import NormalPadding from "../layout/normal_padding";
import Brand from "../typography/brand";
import H1Fill from "../typography/h1_fill";
import H1Outline from "../typography/h1_outline";
import H3Fill from "../typography/h3_fill";

type LoadingProps = {
  percentages: number;
  isDone: boolean;
};

function Loading({ percentages, isDone }: LoadingProps) {
  const [Remove, setRemove] = useState(false);

  useEffect(() => {
    if (isDone) {
      setRemove(true);
    }
  }, [isDone]);

  return (
    <AnimatePresence>
      {!Remove && (
        <motion.div
          className={"fixed z-10 w-full transition-all ease-in-out"}
          animate={{
            opacity: 1,
          }}
          exit={{
            y: "-100vh",
            opacity: 0,
          }}
          transition={{ 
            delay: 2,
           }}
        >
          <MainLayout>
            <LimitSizeLayout>
              <NormalPadding>
                <div className="h-screen flex flex-col justify-center items-center">
                  <span className="flex flex-col justify-center items-center gap-[-30px]">
                    <Brand className="text-center" />
                    <div className="w-[50px] h-[3px] bg-accent animate-pulse"></div>
                  </span>
                  <span className="flex flex-row transition-all animate-pulse">
                    <H1Fill>Load</H1Fill>
                    <H1Outline>ing</H1Outline>
                  </span>
                  <H3Fill>{percentages}%</H3Fill>
                </div>
              </NormalPadding>
            </LimitSizeLayout>
          </MainLayout>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
