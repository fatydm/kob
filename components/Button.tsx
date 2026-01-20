
import React from "react";

export default function Button(props: {
  type?: "button" | "submit" | "reset";
  label: string;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {

  return (
    <button
      className={`
        rounded-2xl 
        bg-gradient-to-r from-[#9B7FA5] to-[#C9B5C9]
        px-5 h-[45px] w-[40%] 
        text-white font-semibold
        shadow-[0_0_8px_rgba(176,141,115,0.3)]
        transition-all duration-500
        relative overflow-hidden
        hover:shadow-[0_0_15px_rgba(210,170,140,0.8)]
        hover:scale-[1.03]
        hover:border hover:border-[#e7c7a3] mt-6
        uppercase` + props.classes}
      onClick={props.onClick}
      type={props.type}
    >
     {props.label}
    </button>
  );
}