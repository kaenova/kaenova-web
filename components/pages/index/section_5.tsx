import React from "react";
import ElevatedButton from "../../button/elevated_button";
import H2Fill from "../../typography/h2_fill";
import NormalText from "../../typography/normal_text";
import StrikeThroughH1 from "../../typography/strike_through_h1";

function IndexSection5() {
  return (
    <section
      id="profile"
      className="mt-[30px] text-center px-[100px] flex flex-col justify-center items-center h-screen"
    >
      <StrikeThroughH1 strike="Con" normal="tact" className="mb-[18px]" />
      <img
        src="/profile-min.png"
        alt=""
        className="shadow-md w-[150px] rounded-full select-none mb-[30px]"
      />
      <H2Fill>Hello! Let&#39;s Connect</H2Fill>
      <NormalText className="text-justify ">
        Hello there! Thank you for checking out my personal website. I&#39;m a web developer mainly on Back End technology. Currently I also learning DevOps and Machine Learning Technology. Learning and collaborating with people is one of my key to learn.
      </NormalText>
      <div className="flex flex-col justify-center sm:flex-row mt-5">
        <ElevatedButton
          text="Email"
          className="mr-[30px]"
          onClick={() => {
            // @ts-ignore
            window.location = "mailto:kaenova@gmail.com";
          }}
        />
        <ElevatedButton
          text="Linkedin"
          onClick={() => {
            // @ts-ignore
            window.location = "https://www.linkedin.com/in/kaenova/";
          }}
        />
      </div>
    </section>
  );
}

export default IndexSection5;
