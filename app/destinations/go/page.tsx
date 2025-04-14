"use client";
import { justDestinations } from "@/data/my-destinations-data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();

  const getFilteredDestinations = () => {
    const locationFilter = searchParams.get("location") || "";
    const dateFilter = searchParams.get("date") || "";
    const peopleFilter = searchParams.get("people") || "";

    const filtered = justDestinations.filter((destination) => {
      const locationMatch =
        !locationFilter ||
        destination.country
          .toLowerCase()
          .includes(locationFilter.toLowerCase());
      const dateMatch =
        !dateFilter || new Date(destination.date) >= new Date(dateFilter);
      const peopleMatch =
        !peopleFilter || destination.people >= Number(peopleFilter);

      return locationMatch && dateMatch && peopleMatch;
    });
    return filtered;
  };

  const filteredDestinations = getFilteredDestinations();
  const hasResults = filteredDestinations.length > 0;
  const destinationsToDisplay = hasResults
    ? filteredDestinations
    : justDestinations;

  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-lg font-semibold lg:text-white text-center">
          {hasResults
            ? "Congratulations! Destinations Found."
            : "Sorry No destinations match your criteria, All Destinations:"}
        </h2>
        <div className="lg:grid flex flex-wrap lg:grid-cols-5 gap-6 mt-6 items-center justify-center ">
          {destinationsToDisplay.map((destination) => (
            <div
              key={destination.id}
              className="bg-white/5 backdrop-blur-md border flex flex-col gap-3 border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-lg p-4 max-w-80"
            >
              <h3 className="text-lg font-semibold text-white">
                {destination.country}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-gray-300">
                  Date:{" "}
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-2 py-1 ml-2">
                    {destination.date}
                  </span>
                </p>
                <p className="text-gray-300">
                  People:{" "}
                  <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full px-2 py-1 ml-2">
                    {destination.people}{" "}
                    {destination.people > 1 ? "people" : "person"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-full">
      <main className="relative h-full">
        <div className="responsive-image-height ">
          <Image
            src="/blog-images/travel-stories.jpg"
            alt="Blog Cover"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div
          className="absolute top-0 left-0 z-10 text-center my-0 h-full
         flex flex-col m-auto items-center justify-center gap-10  mt-3 inset-0 "
        >
          <div
            className="absolute top-1/2 left-1/2 transform justify-center mt-8 md:mt-0 sm:gap-10
        flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white text-center w-full"
          >
            <h1 className="md:text-5xl text-3xl font-bold mb-4 sm:text-nowrap ">
              Your Dream Destination Awaits!
            </h1>
            <div className="lg:block hidden">
              <Suspense fallback={<p className="text-white">Loading...</p>}>
                <SearchResult />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden flex justify-center px-5">
        <Suspense fallback={<p className="text-white">Loading...</p>}>
          <SearchResult />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
