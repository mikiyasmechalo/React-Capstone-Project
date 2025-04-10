import React from "react";

interface Props {
  children: string;
  className?: string;
  onClick?: () => void;
  size?: "sm";
}

const Button = ({ children, className, onClick, size }: Props) => {
  if (size) {
    return (
      <div
        className={`${className} cursor-pointer bg-black lg:text-[22px] text-white rounded-full font-semibold
          lg:py-3.5 md:px-7 md:py-4 //md:py-6//for-accurate-size py-3 flex h-fit items-center px-5 text-xl hover:bg-black/80
          justify-center text-nowrap`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={`${className} cursor-pointer bg-black lg:text-2xl text-white rounded-full 
        lg:py-3.5 md:px-12 md:py-4 //md:py-6//for-accurate-size py-3 flex h-fit items-center px-5 text-xl hover:bg-black/80
        justify-center text-nowrap`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
