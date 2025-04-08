"use client";
import Link from "next/link";
import React from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  children: string;
  onClick: (e:any) => void;
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
       transition-all duration-200 ease-in-out xs:pl-5 md:pl-0 pl-1`}
    >
      {children}
      {!open && <RiArrowDropDownLine size={35} className="ml-[-5px]" />}
      {open && <RiArrowDropUpLine size={35} className="ml-[-5px]" />}
    </button>
  );
};
export const DropDownMenu = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) => {
  return (
    open && (
      <div
        className={`absolute w-full top-11.5 left-0 inset-0 h-fit z-10 ring-2 ring-gray-200 
            bg-white p-2 rounded-sm text-base shadow-lg md:w-fit`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      </div>
    )
  );
};

export const DropDownMenuItem = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: (e?:any) => void;
}) => {
  if (href)
    return (
      <Link
        href={href}
        className="cursor-pointer block w-full px-4 py-2 text- text-[#9B9B9B] hover:bg-gray-600/50 hover:text-white  lg:min-w-50"
        role="menuitem"
      >
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer block w-full px-4 py-2 text- text-[#9B9B9B] hover:bg-gray-600/50 hover:text-white  lg:min-w-50"
        role="menuitem"
      >
        {children}
      </button>
    );
  }
};
export default DropDownButton;
