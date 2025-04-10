import { WhyChooseUsProps } from "@/data/my-why-choose-us";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const WhyChooseUsCard = ({
  title,
  description,
  linkTo,
  imgSrc,
}: WhyChooseUsProps) => {
  return (
    <div
      className="flex-shrink-0 text-black bg-white lg:py-8 py-5 md:py-8 pb-12 md:pb-12 pr-3 
      md:pr-0 lg:pr-16 rounded-[10px] px-3.5 md:px-5 m-1.5 md:m-3 flex flex-col gap-4 md:gap-8 shadow-lg"
    >
      <div className="w-16 h-16 md:w-25 md:h-25">
        <Image
          src={imgSrc}
          alt={title}
          width={1000}
          height={1000}
          className="lg:w-25 lg:h-25 h-20 w-20 object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
        <p className="text-base lg:text-lg text-grayCustom max-w-55 md:max-w-60 ">
          {description}
        </p>
        <Link
          href={linkTo}
          className="flex gap-2 lg:gap-4 text-base lg:text-lg items-center hover:underline hover:text-gray-700"
        >
          Learn More <FaArrowRightLong className="text-lg md:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
