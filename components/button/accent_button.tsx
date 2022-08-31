import React from "react";
import { ButtonType } from "../../types/react";
import H3Fill from "../typography/h3_fill";

function AccentButton(props: ButtonType) {
  return (
    <button
    {...props}
    className={"bg-accent rounded-[5px] py-[10px] hover:opacity-80 active:opacity-70 active:scale-95 transition-all " + props.className} onClick={props.onClick}>
      <H3Fill>{props.text}</H3Fill>
    </button>
  );
}

export default AccentButton;
