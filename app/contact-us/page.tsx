import ContactInfoGrid from "@/components/ContactGrid";
import SendMessage from "@/components/SendMessage";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="md:min-h-screen bg-gray-100">
        <div className="bg-cover bg-center bg-no-repeat md:block md:mb-10 relative">
          <img
            src="/contact-bg.png"
            alt="Contact Background"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform justify-center mt-8 md:mt-0
          flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="md:text-7xl text-4xl font-bold mb-4">Contact</h1>
            <p className="md:text-2xl text-lg flex items-center gap-2">
              Home
                <FaChevronRight />
              Contact
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
