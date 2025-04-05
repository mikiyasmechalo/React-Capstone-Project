"use client";
import React, { useState } from "react";
import WhyChooseUsCard, { WhyChooseUsProps } from "./WhyChooseUsCard";
import Image from "next/image";
import { ScrollButtonLeft, ScrollButtonRight } from "./ScrollButtons";

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
    <div className="relative p-10 lg:mb-40 md:mb-30 mb-10 ">
      <div className="md:min-h-[550px] min-h-[250px] sm:min-h-[350px] w-full mb-40 border-2 ring-1 ring-black">
        <Image
          src={"/why-choose-us-img.png"}
          alt={"Women Traveling Background"}
          fill
          style={{ objectFit: "cover" }}
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
        <div className="md:hidden w-full overflow-x-auto px-4">
          <div className="flex gap-8 w-max">
            {items.map((item, index) => (
              <div className="flex-shrink-0 md:w-[300px] " key={index}>
                <WhyChooseUsCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout (carousel) */}
        <div className="hidden md:grid w-full grid-cols-3 gap-8 lg:px-40 px-20">
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
{
  /* <div className="flex mx-auto">
          <div className="pb-10 flex max-w-370 w-fit overflow-hidden">
            {items.map((item, index) => (
              <div
                className="flex-shrink-0 w-1/3 flex justify-center"
                key={index}
              >
                <WhyChooseUsCard {...item} />
              </div>
            ))}
          </div>
        </div> */
}

({ items }: { items: WhyChooseUsProps[] }) => {
  return (
    <div className="relative p-10">
      {/* Image Container - Add relative for Next.js Image */}
      <div className="relative h-[600px] w-full mb-20">
        {" "}
        {/* Fixed height */}
        <Image
          src={"/why-choose-us-img.png"}
          alt="Why choose us"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container - Remove absolute positioning */}
      <div className="flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300">
            Our services have been used by world travelers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {items.map((item, index) => (
            <WhyChooseUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
