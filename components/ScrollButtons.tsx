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
      } text-[#737373] rounded-[10px] md:p-5 p-4 z-20 drop-shadow-black/25 drop-shadow-lg  border border-[#E8E8E8]`}
    >
      <FaChevronLeft className="md:size-8 size-6" />
    </button>
  );
};
export const ScrollButtonRight = ({ onClick, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "cursor-pointer bg-white"
          : "opacity-70 bg-gray-200 cursor-not-allowed "
      } bg-white text-[#737373] rounded-[10px] md:p-5 p-4 z-20 drop-shadow-black/25 drop-shadow-lg border border-[#E8E8E8]`}
    >
      <FaChevronRight className="md:size-8 size-6" />
    </button>
  );
};
