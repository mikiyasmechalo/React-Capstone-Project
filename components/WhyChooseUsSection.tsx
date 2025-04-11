"use client";
import React, { useState } from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import Image from "next/image";
import { ScrollButtonLeft, ScrollButtonRight } from "./ScrollButtons";
import { WhyChooseUsProps } from "@/data/my-why-choose-us";

const WhyChooseUsSection = ({ items }: { items: WhyChooseUsProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const maxIndex = Math.max(0, items.length - itemsToShow);

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;
  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative p-10 lg:mb-40 md:mb-30 mb-30">
      <div className="md:min-h-[500px] min-h-[220px] sm:min-h-[295px] w-full mb-40 border-2 ring-1 ring-black">
        <Image
          src={"/why-choose-us-img.png"}
          alt={"Women Traveling Background"}
          fill
          className="object-center object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10 z-1"></div>
      </div>

      {/* Only show scroll buttons on larger screens */}
      <div className="hidden md:flex absolute lg:px-30 px-10 w-full max-w-screen top-80 left-0 z-20 justify-between">
        <ScrollButtonLeft active={canScrollLeft} onClick={handleScrollLeft} />
        <ScrollButtonRight
          active={canScrollRight}
          onClick={handleScrollRight}
        />
      </div>

      <div
        className="text-white absolute flex flex-col md:top-35 top-20 left-0 w-full
                  h-full z-10 md:gap-40 sm:gap-20 gap-10"
      >
        <div className="flex flex-col gap-7 items-center justify-center">
          <h2 className="md:text-6xl sm:text-5xl text-3xl font-bold">
            Why Choose Us?
          </h2>
          <p className="md:text-lg text-base sm:text-left text-center ">
            our services have been used by world travelers.
          </p>
        </div>

        {/* Mobile layout (scrollable) */}
        <div
          className="md:hidden w-full overflow-x-auto px-4 pb-5 md:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-8 w-max">
            {items.map((item, index) => (
              <div className="flex-shrink-0 md:w-[300px] " key={index}>
                <WhyChooseUsCard
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                  linkTo="/my/about-us"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout (carousel) */}
        <div className="scroll-smooth hidden md:grid w-full grid-cols-3 gap-8 lg:px-40 px-20">
          {visibleItems.map((item, index) => (
            <div className="justify-center flex flex-shrink-0" key={index}>
              <WhyChooseUsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;