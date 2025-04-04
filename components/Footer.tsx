import React from "react";
import EmailSubmit from "./EmailSubmit";
import logo from "@/public/logo-1.png";
import Image from "next/image";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative hidden lg:block">
      <div
        className="pt-16 relative text-center flex flex-col items-center justify-center gap-4 
      mt-10 pb-36"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block`}
          style={{ backgroundImage: "url('/footer-img.png')" }}
        ></div>
        <h2 className="z-10 text-6xl text-white font-semibold">
          Subscribe To Get Special Price
        </h2>
        <p className="z-10 text-[#DFDFDF] text-lg max-w-170 mb-15">
          {" "}
          {/*mb-28 feels too much*/}
          Dont wanna miss something? subscribe right now and get special
          promotion and monthly newsletter
        </p>
        <div className="m-auto">
            <EmailSubmit />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 px-12 py-16 justify-between text-[#6C6C6C] font-medium text-lg">
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
            <Link href={"/"}>Home</Link>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/tours"}>Tours</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-black mb-6">Follow Us</h3>
          <div className="flex text-[#3D3D3D] items-center gap-7">
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
        <p className="text-[#DFDFDF] text-lg">
          Copyright &copy; All rights reserved (Website Developed & Managed by
          creativechroma)
        </p>
      </div>
    </div>
  );
};

export default Footer;
