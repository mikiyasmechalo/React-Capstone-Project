"use client";
import React from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  children: string;
  onClick: () => void;
  color?: "gray" | "white";
  open: boolean;
}

const DropDownButton = ({ children, onClick, color, open }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "gray"
          ? "text-[#9B9B9B] hover:text-gray-800"
          : "text-white hover:text-gray-300"
      } rounded-sm cursor-pointer flex items-center justify-between 
      md:justify-start ring-2 ring-gray-300 md:ring-0 w-full p-1 md:p-0
       transition-all duration-200 ease-in-out`}
    >
      {children}
      {!open && <RiArrowDropDownLine size={35} className="ml-[-5px]" />}
      {open && <RiArrowDropUpLine size={35} className="ml-[-5px]" />}
    </button>
  );
};

export default DropDownButton;
