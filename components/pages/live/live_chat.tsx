import React, { useState } from "react";
import { ExtendClassName } from "../../../types/react";
import AccentButton from "../../button/accent_button";
import TextArea from "./text_area";
import H2Fill from "../../typography/h2_fill";
import NormalText from "../../typography/normal_text";
import Brand from "../../typography/brand";
import Link from "next/link";
import Chat from "./chat";
import { AnimatePresence, motion } from "framer-motion";
import { ChatData } from "../../../types/live";
import ReCAPTCHA from "react-google-recaptcha";

function LiveChat({ className }: ExtendClassName) {
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

/*
To chat, you need to:
1. verify you're a human
2. insert your name
3. you can chat
*/
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
  const maxChatArray = 50;
  const maxCharLength = 240;

  // Captcha and state related
  const [GoogleCode, setGoogleCode] = useState("");
  const [Next, setNext] = useState(false);

  // Chat box related
  const [ChatArray, setChatArray] = useState<ChatData[]>([]);

  // Sender related
  const [SenderName, setSenderName] = useState("");
  const [Message, setMessage] = useState("");

  function UpdateChatArray(data: ChatData) {
    if (data.message.trim().length == 0 || data.senderName.trim().length == 0)
      return;
    setChatArray((ChatArray) => [data, ...ChatArray.slice(0, maxChatArray)]);
  }

  function sendMessage() {
    UpdateChatArray({
      createdAt: new Date(),
      message: Message,
      senderName: SenderName,
    });
    setMessage("");
  }

  function handleReCapthca(token: string | null) {
    console.log(token);
    if (!token) return;
    setGoogleCode(token);
  }

  function handleNextButton() {
    setNext(true);
  }

  return (
    <>
      {/* Chat History */}
      <div className="flex max-h-full flex-col-reverse w-full overflow-x-hidden overflow-y-scroll">
        <AnimatePresence>
          {ChatArray.map((v, i) => (
            <motion.div
              key={v.createdAt.getTime()}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <Chat
                message={v.message}
                createdAt={v.createdAt}
                senderName={v.senderName}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="bottom-0 w-full bg-secondarydark p-2 z-[1] select-none">
        <AnimatePresence mode="wait">
          {/* Google Verification */}
          {!Next && (
            <motion.div
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <NormalText>What&apos;s your name?</NormalText>
              <input
                className="p-1 bg-thirddark rounded-[5px] outline-accent focus:border-2 focus:border-accent outline-offset-2 text-white"
                value={SenderName}
                onChange={(e) => {
                  setSenderName(e.target.value);
                }}
              />
              <div className="scale-75 relative min-h-[30px] min-w-[300px] flex flex-col justify-center items-center">
                <ReCAPTCHA
                  sitekey="6Lecjh8eAAAAALVQX8n85Nstzf2-IJq_ZZz-rodb"
                  onChange={handleReCapthca}
                />
                <NormalText className="absolute top-0 text-center z-[-1]">
                  Please wait for ReCAPTCHA to appear
                </NormalText>
              </div>
              <AccentButton
                onClick={handleNextButton}
                className="w-full disabled:opacity-25"
                text="Next"
                disabled={!GoogleCode || SenderName.trim() == ""}
              />
            </motion.div>
          )}

          {/* Input */}
          {Next && (
            <motion.div
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex flex-col justify-center gap-2"
            >
              <div className="flex flex-row items-center justify-between">
                <NormalText className="select-none text-ellipsis">
                  Send as: {SenderName}
                </NormalText>
                {/* <AccentButton text="change" className="px-[5px] py-[2px]" /> */}
              </div>
              <TextArea
                value={Message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                maxLength={240}
                placeholder={`Your message (max ${maxCharLength} characters)`}
              />
              <AccentButton onClick={sendMessage} text="Send" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default LiveChat;
