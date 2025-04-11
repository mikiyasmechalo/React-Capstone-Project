import ContactInfoGrid from "@/components/ContactGrid";
import SendMessage from "@/components/SendMessage";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div>
        <div className="bg-cover bg-center bg-no-repeat md:mb-10 relative">
          <img
            src="/contact-bg.png"
            alt="Contact Background"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-center">
            <h1 className="md:text-7xl text-4xl font-bold mb-4">Contact</h1>
            <p className="md:text-2xl text-lg flex items-center gap-2">
              Home
              <FaChevronRight />
              Contact
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-start gap-10 w-full">
          {/* Left Side: Send Message */}
          <div className="w-full md:w-1/2">
            <SendMessage />
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full md:w-1/2">
            <ContactInfoGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
