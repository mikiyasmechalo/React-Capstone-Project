import React from "react";

interface Props {
  children: string;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} cursor-pointer bg-black lg:text-lg text-white rounded-full 
        md:py-3.5 md:px-5 py-2 flex items-center px-4 text-base hover:bg-gray-800
        justify-center`}
    >
      {children}
    </div>
  );
};

export default Button;
