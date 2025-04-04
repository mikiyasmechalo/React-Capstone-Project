"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg"; // Ensure this path is correct
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import DropDownButton from "./DropDownButton"; // Assuming this component exists

const DesktopNavBar = () => {
  return (
    // This header is hidden on small screens (default) and visible from md breakpoint upwards
    <header className="relative z-10 hidden md:block">
      <div
        // Responsive height and padding. Items centered vertically.
        className={`h-24 md:h-28 lg:h-32 px-4 md:px-8 lg:px-14 
                   bg-[#120B0B82]/50 text-white font-semibold 
                   flex items-center justify-between`} // Use justify-between for logo left, nav right
      >
        {/* Logo - Link to home */}
        <div className="flex-shrink-0">
          {" "}
          {/* Prevent logo from shrinking */}
          <Link href="/" aria-label="Rebel Rover Home">
            <Image
              src={logo}
              // Use Tailwind width classes for responsiveness. Height auto.
              // Adjust these width values based on your design needs.
              alt="Rebel Rover logo"
              className="object-contain h-auto w-36 md:w-48 lg:w-64"
              // priority // Consider adding priority if it's LCP (Largest Contentful Paint)
            />
          </Link>
        </div>

        {/* Navigation Links - Use <nav> semantic element */}
        <nav className="flex items-center">
          <div
            // Responsive gap and base text size, slightly larger on lg screens.
            className="flex items-center justify-end gap-4 md:gap-6 lg:gap-10 
                       text-base lg:text-lg"
          >
            <Link href={"/"} className="hidden lg:block hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            {/* Assuming DropDownButton is styled appropriately */}
            <DropDownButton onClick={() => {}}>Package</DropDownButton>
            <DropDownButton onClick={() => {}}>Destination</DropDownButton>
            <DropDownButton onClick={() => {}}>Blog</DropDownButton>
            <Link
              href={"/contact"}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            {/* Search Icon Button - more accessible */}
            <button
              aria-label="Search"
              className="hover:text-gray-300 transition-colors"
              // Add onClick handler if this toggles a search bar
            >
              <AiOutlineSearch size={25} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Removed the unrelated Home1 component for clarity
// export function Home1() { ... }

export default DesktopNavBar;
