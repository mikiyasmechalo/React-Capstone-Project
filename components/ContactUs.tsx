import { Poppins } from "@/app/layout";
import React from "react";

const ContactUs = () => {
  return (
    <div
      className={`${Poppins.className} bg-black hidden lg:block text-white p-8 rounded-2xl 
      w-full max-w-md space-y-17 px-10 pt-10 pb-16`}
    >
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">Have Any Question?</h2>
        <p className="mb-6 font-normal">
          Do not hesitate to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>
      </div>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span>+62 6943 6956</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>contact@domain.com</span>
      </div>
    </div>
  );
};

export default ContactUs;
