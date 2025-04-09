import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import FounderQuote from "../components/FounderQuote";
import StatsSection from "../components/StatsSection";
import ValueSection from "../components/ValuesSection";
import GallerySection from "../components/GallerySection";

const page = () => {
  return (
    <div>
      <div className="md:min-h-screen bg-gray-100">
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1160px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]" // Added responsive height classes
        >
          <Image
            src="/about-us-cover.png"
            alt="Blog Cover"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div
            className="absolute top-1/2 left-1/2 transform justify-center mt-8 md:mt-0
          flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white text-center"
          >
            <h1 className="md:text-7xl text-4xl font-bold mb-4">About Us</h1>
            <p className="md:text-2xl text-lg flex items-center gap-2">
              <Link
                href={"/my"}
                className="hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <FaChevronRight />
              <Link
                href={"#"}
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col md:gap-40 gap-15">
        <div className="lg:flex-row flex flex-col items-start align-top justify-center mt-10 md:mt-40">
          <ValueSection />
        </div>
        <div className="max-w-[1376px] mx-auto">
          <FounderQuote />
        </div>
        <StatsSection />
        <GallerySection />
      </div>
    </div>
  );
};
export default page;
