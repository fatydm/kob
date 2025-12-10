
import React from "react";

export default function Button(props: {
  type?: "button" | "submit" | "reset";
  label: string;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {

  return (
    <button
      className={"mb-5 rounded-2xl px-5 h-[45px] w-[30%]" + props.classes}
      onClick={props.onClick}
      type={props.type}
    >
     {props.label}
    </button>
  );
}