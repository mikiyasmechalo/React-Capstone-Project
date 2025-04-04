"use client";
import { useEffect, useRef, useState } from "react";
import ExploreCard, { CardData } from "./ExploreCard";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const ExploreScrollbar = ({ cards }: { cards: CardData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    cardWidth: 0,
    containerWidth: 0,
    margin: 16,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!carouselRef.current) return;
      const containerWidth = carouselRef.current.clientWidth;
      const cardWidth = containerWidth / 3 - 32;
      setDimensions({
        cardWidth,
        containerWidth,
        margin: 16,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!carouselRef.current || dimensions.cardWidth === 0) return;

    const container = carouselRef.current;
    const totalCardWidth = dimensions.cardWidth + dimensions.margin * 2;

    let scrollPosition = 0;
    if (currentIndex > 0 && currentIndex < cards.length - 1) {
      scrollPosition =
        currentIndex * totalCardWidth -
        dimensions.containerWidth / 2 +
        dimensions.cardWidth / 2;
    } else if (currentIndex === 0) {
      scrollPosition = 0;
    } else {
      scrollPosition =
        (cards.length - 1) * totalCardWidth -
        dimensions.containerWidth +
        dimensions.cardWidth +
        2 * dimensions.margin;
    }

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [currentIndex, dimensions, cards.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-3 py-10">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-xl bg-white shadow-md ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === cards.length - 1}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-xl bg-white shadow-md ${
          currentIndex === cards.length - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <FaChevronRight className="h-5 w-5" />
      </button>

      <div className="h-[400px]">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth w-full snap-x py-5"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 carousel-item"
              style={{
                width: `${dimensions.cardWidth}px`,
                margin: `0 ${dimensions.margin}px`,
                height: "100%",
              }}
            >
              <ExploreCard
                nowViewing={index === currentIndex}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreScrollbar;
