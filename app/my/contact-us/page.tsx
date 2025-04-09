import ContactInfoGrid from "@/components/ContactGrid";
import SendMessage from "@/components/SendMessage";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  return (
    <div className="md:space-y-20 sm:space-y-10 space-y-5">
      <div className="md:min-h-screen bg-gray-100">
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1160px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]" // Added responsive height classes
        >
          <Image
            src="/contact-bg.png"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div
            className="absolute top-1/2 left-1/2 transform justify-center mt-8 md:mt-0
          flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white text-center"
          >
            <h1 className="md:text-7xl text-4xl font-bold mb-4">Contact</h1>
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
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="lg:flex-row flex flex-col items-center justify-center">
          <div className="lg:order-first order-last w-full lg:w-1/2">
            <SendMessage />
          </div>
          <ContactInfoGrid />
        </div>
      </div>
    </div>
  );
};
export default page;
