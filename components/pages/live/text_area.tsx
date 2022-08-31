import React from "react";

function TextArea(
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) {
  return (
    <textarea
      {...props}
      className="p-2 bg-thirddark rounded-[5px] outline-accent focus:border-2 focus:border-accent outline-offset-2 text-white min-h-[75px] max-h-[200px]"
    />
  );
}

export default TextArea;
