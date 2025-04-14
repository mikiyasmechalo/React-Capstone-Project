import ContactInfoGrid from "@/components/contact/ContactGrid";
import SendMessage from "../components/MySendMessage";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  return (
    <div className="md:space-y-20 sm:space-y-10 ">
      <div className="md:min-h-screen bg-gray-100">
        <div className="responsive-image-height">
          <Image
            src="/contact-bg.png"
            alt="Contact Background"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">Contact</h1>
            <p className="text-lg md:text-2xl flex items-center gap-2">
              <Link
                href="/my"
                className="hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <FaChevronRight />
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="lg:flex-row flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="lg:order-first order-last lg:w-1/2 w-full">
            <SendMessage />
          </div>
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <ContactInfoGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
