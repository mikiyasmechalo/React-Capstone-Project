"use client";
import { useEffect, useRef, useState } from "react";
import ExploreCard, { ExploreCardProps } from "./ExploreCard";
import { ScrollButtonLeft, ScrollButtonRight } from "./ScrollButtons";

const ExploreScrollbar = ({ cards }: { cards: ExploreCardProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    cardWidth: 0,
    containerWidth: 0,
    margin: 16,
  });

  const [isMobile, setIsMobile] = useState(false);

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

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 960);
    };

    updateDimensions();
    checkIsMobile();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
  }, [currentIndex, dimensions, cards.length, isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-3 py-10">
      <div className="flex items-center justify-center flex-col lg:py-20 py-10 gap-5">
        <h2 className="lg:text-6xl md:text-4xl text-3xl md:leading-18 font-semibold text-center">
          Explore new worlds with exotic natural scenery
        </h2>
        <p className="text-lg text-grayCustom text-center">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      <div className="h-[400px] relative">
        {!isMobile && (
          <div className="hidden sm:flex absolute w-full max-w-screen top-[-70] left-0 px-9 z-20 justify-between">
            <ScrollButtonLeft
              active={!(currentIndex === 0)}
              onClick={handlePrev}
            />
            <ScrollButtonRight
              active={!(currentIndex == cards.length - 1)}
              onClick={handleNext}
            />
          </div>
        )}
        <div
          ref={carouselRef}
          className={`
            flex overflow-x-auto scroll-smooth w-full snap-x py-5 
            ${isMobile ? "overflow-x-scroll" : "overflow-x-hidden"}
          )`}
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 carousel-item w-70"
              style={{
                width: isMobile ? "" : `${dimensions.cardWidth}px`,
                margin: isMobile ? "0 2%" : `0 ${dimensions.margin}px`,
                height: "100%",
              }}
            >
              <ExploreCard
                nowViewing={isMobile ? true : index === currentIndex}
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
