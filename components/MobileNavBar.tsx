"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Button from "./Button";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute w-full z-50 md:hidden bg-[#120B0B82]/50 text-white">
      <div className="flex items-center justify-between p-2">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:bg-white/10 p-2 rounded-md cursor-pointer"
            aria-label="Open Menu"
          >
            <BiMenu className="size-7" />
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 text-white shadow-lg rounded-md"
            >
              <div className="px-4 py-2 hover:bg-gray-800 focus:bg-gray-800">
                <Link
                  href="/"
                  className="w-full block"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </div>
              <div className="px-4 py-2 hover:bg-gray-800 focus:bg-gray-800">
                <Link
                  href="/about-us"
                  className="w-full block"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </div>
              <div className="px-4 py-2 hover:bg-gray-800 focus:bg-gray-800">
                <Link
                  href="/packages"
                  className="w-full block"
                  onClick={() => setIsOpen(false)}
                >
                  Package
                </Link>
              </div>
              <div className="px-4 py-2 hover:bg-gray-800 focus:bg-gray-800">
                <Link
                  href="/blogs"
                  className="w-full block"
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
              </div>
              <div className="px-4 py-2 hover:bg-gray-800 focus:bg-gray-800">
                <Link
                  href="/contact-us"
                  className="w-full block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex-shrink- mx-2">
          <Link href="/" aria-label="Rebel Rover Home">
            <Image
              src={logo}
              alt="Rebel Rover logo"
              className="object-contain h-auto w-50"
            />
          </Link>
        </div>
        <div className="">
          <Button>Explore</Button>
        </div>
      </div>
    </header>
  );
};

export default MobileNavBar;
