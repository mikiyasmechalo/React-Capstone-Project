import { Poppins } from "@/app/layout";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div
      className={`${Poppins.className} bg-black text-white p-5 rounded-2xl 
      w-full max-w-lg xs:space-y-17 xs:px-10 xs:pt-10 xs:pb-16`}
    >
      <div className="">
        <h2 className="xs:text-2xl text-xl font-semibold mb-4">Have Any Question?</h2>
        <p className="mb-6 xs:text-lg leading-5.5 font-normal">
          Do not hesitate to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>
      </div>
      <div className="flex items-center text-sm xs:text-base gap-5 mb-5">
        <FaPhone  size={20} fill="white"/>
        <span>+62 6943 6956</span>
      </div>
      <div className="flex items-center gap-5 text-sm xs:text-base">
        <IoIosMail fill="white" size={30}/>
        <span>contact@domain.com</span>
      </div>
    </div>
  );
};

export default ContactUs;
