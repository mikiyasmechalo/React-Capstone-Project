import ContactInfoGrid from "@/components/contact/ContactGrid";
import SendMessage from "@/components/blogs/SendMessage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="space-y-10 md:space-y-20">
      {/* Header Section */}
      <div className="md:min-h-screen bg-gray-100">
        <div className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1160px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]">
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
              <Link href="/" className="hover:text-gray-300 transition-colors">
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

      {/* Contact Form and Info Grid */}
      <div className="container mx-auto px-4 pb-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
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
