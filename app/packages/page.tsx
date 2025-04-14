import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import PopularDestinations from "@/app/my/components/PopularDestinations";
import ArticlesSection from "@/app/my/components/ArticlesSection";

const page = () => {
  return (
    <div>
      <main className="relative ">
        <div
          className="responsive-image-height" // Added responsive height classes
        >
          <Image
            src="/packages-cover.png"
            alt="Blog Cover"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div
          className="absolute top-0 left-0 z-10 text-center lg:my-130 h-fit
          md:mt-90 flex flex-col m-auto items-center justify-center gap-10 sm:mt-50 mt-30 inset-0"
        >
          <div
            className="absolute top-1/2 left-1/2 transform justify-center mt-8 md:mt-0 sm:gap-10
            flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white text-center"
          >
            <h1 className="md:text-7xl text-4xl font-bold mb-4 sm:text-nowrap">
              Travel Packages
            </h1>
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
                Packages
              </Link>
            </p>
          </div>
        </div>
      </main>
      <div className="flex flex-col lg:gap-30 md:gap-20  gap-5 lg:py-20 py-5 ">
        <PopularDestinations />
        <Image
          src={"/plane-img.png"}
          alt={"plane"}
          width={10240}
          height={542}
        />
        <ArticlesSection />
      </div>
    </div>
  );
};

export default page;
