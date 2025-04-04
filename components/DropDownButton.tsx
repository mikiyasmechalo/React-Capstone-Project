"use client";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  children: string;
  onClick: () => void;
  color?: "gray" | "white";
}

const DropDownButton = ({ children, onClick, color }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "gray" ? "text-[#9B9B9B]" : "text-white"
      } text-base md:text-lg flex items-center`}
    >
      {children}
      <RiArrowDropDownLine size={35} className="ml-[-5px]" />
    </button>
  );
};

export default DropDownButton;
