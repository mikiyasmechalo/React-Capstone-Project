"use client";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-lg absolute z-[999] w-full text-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Rebel Rover Logo"
          className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[357px] mr-4"
          width={480}
          height={580}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-[50px] text-sm font-medium">
        <Link href="/" className="hover:text-gray-200">Home</Link>
        <Link href="/about-us" className="hover:text-gray-200 whitespace-nowrap">About Us</Link>

        {/* Package Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Package</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10 top-full">
            <Link href="/packages" className="block px-2 py-1 hover:text-gray-300">Package 1</Link>
            <Link href="/packages" className="block px-2 py-1 hover:text-gray-300">Package 2</Link>
          </div>
        </div>

        {/* Destination Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Destination</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10 top-full">
            <Link href="/destinations/asia" className="block px-2 py-1 hover:text-gray-300">Asia</Link>
            <Link href="/destinations/europe" className="block px-2 py-1 hover:text-gray-300">Europe</Link>
            <Link href="/destinations/africa" className="block px-2 py-1 hover:text-gray-300">Africa</Link>
            <Link href="/destinations/america" className="block px-2 py-1 hover:text-gray-300">America</Link>
          </div>
        </div>

        {/* Blog Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Blog</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur top-full text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <Link href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">Latest Posts</Link>
            <Link href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">Travel Tips</Link>
          </div>
        </div>

        <a href="/contact-us" className="hover:text-gray-200">Contact</a>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Search Icon */}
      <div className="ml-2 sm:ml-4 cursor-pointer hover:text-gray-300">
        <FaSearch size={18} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-[rgba(25,25,25,0.6)] backdrop-blur text-gray-100 md:hidden">
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link href="/" className="py-2 hover:text-gray-300">Home</Link>
            <Link href="/about-us" className="py-2 hover:text-gray-300">About Us</Link>

            {/* Package */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Package</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <Link href="/packages" className="block hover:text-gray-300">Package 1</Link>
                <Link href="/packages" className="block hover:text-gray-300">Package 2</Link>
              </div>
            </div>

            {/* Destination */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Destination</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <Link href="/destinations/asia" className="block hover:text-gray-300">Asia</Link>
                <Link href="/destinations/europe" className="block hover:text-gray-300">Europe</Link>
                <Link href="/destinations/africa" className="block hover:text-gray-300">Africa</Link>
                <Link href="/destinations/america" className="block hover:text-gray-300">America</Link>
              </div>
            </div>

            {/* Blog */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Blog</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <Link href="/blogs/1" className="block hover:text-gray-300">Latest Posts</Link>
                <Link href="/blogs/1" className="block hover:text-gray-300">Travel Tips</Link>
              </div>
            </div>

            <Link href="/contact-us" className="py-2 hover:text-gray-300">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
