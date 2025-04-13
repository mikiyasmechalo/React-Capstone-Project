"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

// Create a separate component for the dynamic text
const BookingConfirmationText = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const date = searchParams.get("date");
  const people = searchParams.get("people");

  return (
    <p className="md:text-2xl text-lg flex flex-col items-center gap-2 text-center">
      You have booked a package
      {location && (
        <>
          <br />
          for {location}
        </>
      )}
      {date && (
        <>
          <br />
          on {date}
        </>
      )}
      {people && (
        <>
          <br />
          for {people} {people === "1" ? "person" : "people"}.
        </>
      )}
    </p>
  );
};

const Page = () => {
  return (
    <div>
      <main className="relative ">
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1160px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]" // Added responsive height classes
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
              Congratulations!
            </h1>
            <Suspense fallback={<p className="text-white">Loading...</p>}>
              <BookingConfirmationText />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
