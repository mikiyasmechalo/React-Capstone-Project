import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export interface WhyChooseUsProps {
  title: string;
  description: string;
  linkTo: string;
  imgSrc: string;
}

const WhyChooseUsCard = ({ title, description, linkTo, imgSrc }: WhyChooseUsProps) => {
  return (
    <div className="flex-shrink-0 text-black bg-white py-8 md:py-11 pb-12 md:pb-17 pr-8 md:pr-16 rounded-[10px] ring-1 ring-black px-3.5 md:px-5 m-1.5 md:m-3 flex flex-col gap-4 md:gap-8 shadow-lg">
      <div className="w-16 h-16 md:w-25 md:h-25">
        <Image
          src={imgSrc}
          alt={title}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
        <p className="text-base lg:text-lg text-grayCustom max-w-full md:max-w-60">
          {description}
        </p>
        <Link 
          href={linkTo} 
          className="flex gap-2 lg:gap-4 text-base lg:text-lg items-center hover:underline"
        >
          Learn More <FaArrowRightLong className="text-lg md:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
