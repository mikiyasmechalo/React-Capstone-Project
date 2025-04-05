"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
  onClick: () => void;
  active: boolean;
}
export const ScrollButtonLeft = ({ onClick, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "cursor-pointer bg-white "
          : "opacity-70 bg-gray-200 cursor-not-allowed "
      } text-[#737373] rounded-[10px] p-5 z-20`}
    >
      <FaChevronLeft size={30} />
    </button>
  );
};
export const ScrollButtonRight = ({ onClick, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "cursor-pointer bg-white "
          : "opacity-70 bg-gray-200 cursor-not-allowed "
      } bg-white text-[#737373] rounded-[10px] p-5  z-20`}
    >
      <FaChevronRight size={30} />
    </button>
  );
};
