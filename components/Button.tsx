import React from "react";

interface Props {
  children: string;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} cursor-pointer bg-black lg:text-2xl text-white rounded-full 
        lg:py-3.5 md:px-12 md:py-4 //md:py-6//for-accurate-size py-3 flex h-fit items-center px-5 text-xl hover:bg-gray-800
        justify-center text-nowrap`}
    >
      {children}
    </div>
  );
};

export default Button;
