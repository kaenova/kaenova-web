import React, { useState } from "react";
import { ExtendClassName } from "../../../types/react";
import AccentButton from "../../button/accent_button";
import TextArea from "./text_area";
import H2Fill from "../../typography/h2_fill";
import NormalText from "../../typography/normal_text";
import { ChatData } from "../../../types/live";
import H3Fill from "../../typography/h3_fill";
import { useWindowSize } from "../../../utils/window_size";
import Brand from "../../typography/brand";
import Link from "next/link";
import Chat from "./chat";
import { AnimatePresence } from "framer-motion";

function LiveChat({ className }: ExtendClassName) {
  const window = useWindowSize();

  return (
    <div className={"px-3 pb-3 flex flex-col w-full " + className}>
      <div className="flex flex-row items-center justify-between">
        <H2Fill className="underline decoration-accent decoration-[3px] text-center xl:text-left py-3">
          Live Chat
        </H2Fill>
        <Link href="/">
          <a>
            <Brand />
          </a>
        </Link>
      </div>
      <ChatContainer />
    </div>
  );
}

function ChatContainer() {
  return (
    <div className="border-accent border-2 rounded-[5px] flex flex-col grow static overflow-y-clip justify-between">
      <AnimatePresence>
        <ChatBox />
      </AnimatePresence>
    </div>
  );
}

function ChatBox() {
  const [NumChat, setNumChat] = useState(0);

  return (
    <>
      {/* Chat History */}
      <div className="flex max-h-full flex-col-reverse w-full overflow-x-hidden overflow-y-scroll">
        {[...Array(NumChat)].map((_, i) => (
          <Chat
            key={i}
            message="Hello there! Thank you for checking out my personal website. I’m a web developer mainly on Back End technology. Currently i’m also learning DevOps and Machine Learning Technology. Learning and collaborating with other people is one of my key to learn."
            createdAt={new Date()}
            senderName="Web Developer • ML / DevOps Engineer Enthusi aklsdjlaksdjclaknacdna askdjclasdjl "
          />
        ))}
      </div>

      {/* Input */}
      <div className="bottom-0 w-full bg-secondarydark p-2 flex flex-col justify-center gap-2 z-[1] ">
        <div className="flex flex-row items-center justify-between">
          <NormalText className="select-none text-ellipsis">
            Send as: Kaenova
          </NormalText>
          <AccentButton text="change" className="px-[5px] py-[2px]" />
        </div>
        <TextArea />
        <AccentButton onClick={() => setNumChat(NumChat + 1)} text="Send" />
      </div>
    </>
  );
}

export default LiveChat;
