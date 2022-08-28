import React from "react";
import { ChatData } from "../../../types/live";
import H3Fill from "../../typography/h3_fill";
import NormalText from "../../typography/normal_text";

function Chat({ createdAt, message, senderName }: ChatData) {
  return (
    <div className="flex flex-col gap-2 p-2 max-w-full">
      <div>
        <H3Fill>{senderName}</H3Fill>
        <NormalText className="text-thirddark">
          {createdAt.toLocaleString()}
        </NormalText>
      </div>
      <div className="py-[5px] px-[10px] bg-thirddark rounded-[5px] max-w-full">
        <NormalText className="break-words">{message}</NormalText>
      </div>
    </div>
  );
}

export default Chat;
