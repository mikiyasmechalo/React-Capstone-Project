"use client";
import { useEffect, useRef, useState } from "react";
import ExploreCard from "./ExploreCard";

interface Props {
  nowViewing: boolean;
  title: string;
  imageSrc: string;
  description: string;
}

const ExploreScrollbar = ({ cards }: { cards: Props[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setScrollEnd(scrollWidth === clientWidth);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Adjust scroll speed

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setScrollX(scrollLeft);
      setScrollEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((card, index) => (
          <ExploreCard key={index} {...card} />
        ))}
      </div>

      {!scrollEnd && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow"
        >
          {/* Right arrow icon (replace with your icon) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {scrollX > 0 && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow"
        >
          {/* Left arrow icon (replace with your icon) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ExploreScrollbar;
