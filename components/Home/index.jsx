import React from "react";
import Section1Home from "./Section1Home";
import Section2Home from "./Section2Home";
import Section3Home from "./Section3Home";

function HomeDef() {
  return (
    <>
      <span className="snap-mandatory scroll-smooth snap-y">
        <Section1Home />
        <Section2Home />
        <Section3Home />
      </span>
    </>
  );
}

export default HomeDef;
