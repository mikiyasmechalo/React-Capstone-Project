"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { ScrollButtonLeft, ScrollButtonRight } from "./ui/ScrollButtons";
import { testimonials } from "@/data/testimonials";

const TestimonialSection = () => {
  const flexContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (!flexContainerRef.current) return;
    flexContainerRef.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    if (!flexContainerRef.current) return;
    flexContainerRef.current.scrollLeft += 350;
  };

  useEffect(() => {
    const container = flexContainerRef.current;
    if (!container) return;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative  flex flex-col gap-5 lg:px-20 md:gap-30 py-5 ">
      <div className="flex flex-col gap-2 md:px-15 px-5">
        <h3 className="text-gray-700 md:text-3xl sm:text-2xl text-xl font-medium">{`${"testimonial".toUpperCase()}`}</h3>
        <h2 className="md:text-6xl sm:text-5xl text-3xl font-semibold">
          What our clients say
        </h2>
        <p className="text-gray-700 md:text-lg max-w-100">
          Create a visual identity for your company and a overall brand
        </p>
      </div>
      <div
        className="hidden absolute md:flex right-30 top-40
        w-full max-w-screen justify-end gap-10"
      >
        <ScrollButtonLeft active={canScrollLeft} onClick={scrollLeft} />
        <ScrollButtonRight active={canScrollRight} onClick={scrollRight} />
      </div>
      <div
        ref={flexContainerRef}
        className="flex gap-9 overflow-x-auto scroll-smooth py-8 
            md:px-15 px-5 scroll-"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="flex-shrink-0" key={index}>
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              description={testimonial.description}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;

interface TestimonialCardProps {
  name: string;
  image: string;
  description: string;
  rating: number;
}

export const TestimonialCard = ({
  name,
  image,
  description,
  rating,
}: TestimonialCardProps) => {
  return (
    <div
      className="relative mt-15 bg-white drop-shadow-xl/10 md:pt-45 pt-35 flex flex-col 
      items-center justify-center gap-4 p-10 rounded-lg w-full max-w-[300px] md:max-w-sm md:px-13 px-6 h-fit "
    >
      <div>
        <div
          className="flex flex-col items-center justify-center absolute top-7 left-1/2 
            text-center -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="rounded-full"
          />
          <h3 className="md:text-2xl text-xl font-semibold">{name}</h3>
          <p className="text-grayCustom md:text-lg">Traveller</p>
        </div>
        <div className="flex flex-col gap-4">
          <Rating rating={rating} />
          <p className="md:text-lg text-grayCustom">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((_, index) => (
        <IoStarSharp
          key={index}
          className={`${
            index < rating ? "text-yellow-500" : "text-gray-400"
          } size-5`}
        />
      ))}
    </div>
  );
};
