"use client";
import React, { useState } from "react";
import EmailSubmit from "@/components/ui/EmailSubmit";
import logo from "@/public/logo-1.png";
import Image from "next/image";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaInfoCircle,
  FaMapSigns,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const MyFooter = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="pt-16 relative text-center flex flex-col items-center justify-center gap-4 
      md:mt-10 lg:pb-36"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block`}
          style={{ backgroundImage: "url('/footer-img.png')" }}
        ></div>
        <h2 className="z-10 lg:text-6xl md:text-white text-2xl md:text-4xl font-semibold">
          Subscribe To Get Special Price
        </h2>
        <p className="z-10 lg:text-gray-100 hidden lg:text-lg max-w-170 lg:mb-15">
          Dont wanna miss something? subscribe right now and get special
          promotion and monthly newsletter
        </p>
        <div className="w-full flex justify-center p-3">
          <EmailSubmit />
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden px-4 py-8">
        <Image
          src={logo}
          alt="logo"
          className="relative mb-6 mx-auto"
          height={91}
        />
        <p className="text-gray-600 font-medium text-lg text-center mb-6 hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pharetra condimentum.
        </p>

        <div className="mb-4 mx-4">
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="w-full text-left py-3 border-b border-gray-200 flex items-center justify-between"
          >
            Contact Information
            {contactOpen ? (
              <FaChevronUp size={16} />
            ) : (
              <FaChevronDown size={16} />
            )}
          </button>
          {contactOpen && (
            <div className="mt-2 flex flex-col gap-2 pl-3">
              <div className="flex gap-2 items-center mb-2">
                <FaMapMarkerAlt size={20} className="text-black" />
                <p className="text-gray-600">732 Despard St, Atlanta</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <IoMdMail size={20} className="text-black" />
                <p className="text-gray-600">info@traveller.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhoneAlt size={20} className="text-black" />
                <p className="text-gray-600">+97 888 8888</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 mx-4">
          <button
            onClick={() => setLinksOpen(!linksOpen)}
            className="w-full text-left py-3 border-b border-gray-200 flex items-center justify-between"
          >
            QuickLink{" "}
            {linksOpen ? (
              <FaChevronUp size={16} />
            ) : (
              <FaChevronDown size={16} />
            )}
          </button>
          {linksOpen && (
            <div className="mt-2 flex flex-col gap-4 pl-3">
              <Link
                href={"/"}
                className="text-gray-600 flex items-center gap-2"
              >
                <FaHome size={20} className="text-black" /> Home
              </Link>
              <Link
                href={"/about-us"}
                className="text-gray-600 flex items-center gap-2"
              >
                <FaInfoCircle size={20} className="text-black" /> About Us
              </Link>
              <Link
                href={"/tours"}
                className="text-gray-600 flex items-center gap-2"
              >
                <FaMapSigns size={20} className="text-black" /> Tours
              </Link>
              <Link
                href={"/contact"}
                className="text-gray-600 flex items-center gap-2"
              >
                <FaEnvelope size={20} className="text-black" /> Contact
              </Link>
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-col gap-2 items-center justify-between w-full text-left py-2 border-b border-gray-200">
            Follow Us
            <div className="mt-2 flex text-gray-950 items-center gap-4 justify-center">
              <Link href={"/"}>
                <FaFacebook size={32} />
              </Link>
              <Link href={"/"}>
                <FaTwitter size={32} />
              </Link>
              <Link href={"/"}>
                <FaYoutube size={32} />
              </Link>
              <Link href={"/"}>
                <FaInstagram size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-0 px-12 py-16 justify-between text-gray-600 font-medium text-lg">
        <div className="flex flex-col">
          <Image src={logo} alt="logo" className="relative" height={91} />
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Contact Information
          </h3>
          <div className="flex gap-3 flex-col">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt size={20} className="text-black" />
              <p>732 Despard St, Atlanta</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdMail size={20} className="text-black" />
              <p>info@traveller.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt size={20} className="text-black" />
              <p>+97 888 8888</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-black mb-6">QuickLink</h3>
          <div className="flex flex-col gap-4">
            <Link href={"/my"}>Home</Link>
            <Link href={"/my/about-us"}>About Us</Link>
            <Link href={"/my/packages"}>Package</Link>
            <Link href={"/my/contact-us"}>Contact</Link> 
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-black mb-6">Follow Us</h3>
          <div className="flex text-gray-950 items-center gap-7">
            <Link href={"/"}>
              <FaFacebook size={23} />
            </Link>
            <Link href={"/"}>
              <FaTwitter size={23} />
            </Link>
            <Link href={"/"}>
              <FaYoutube size={23} />
            </Link>
            <Link href={"/"}>
              <FaInstagram size={23} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-black h-30">
        <p className="text-gray-100 lg:text-lg text-center text-sm">
          Copyright &copy; All rights reserved (Website Developed & Managed by
          creativechroma)
        </p>
      </div>
    </div>
  );
};

export default MyFooter;
