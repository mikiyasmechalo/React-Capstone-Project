"use client";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-lg absolute z-[999] w-full text-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Rebel Rover Logo"
          className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[357px] mr-4"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-[50px] text-sm font-medium">
        <a href="/" className="hover:text-gray-200">Home</a>
        <a href="/about-us" className="hover:text-gray-200 whitespace-nowrap">About Us</a>

        {/* Package Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Package</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="/packages" className="block px-2 py-1 hover:text-gray-300">Package 1</a>
            <a href="/packages" className="block px-2 py-1 hover:text-gray-300">Package 2</a>
          </div>
        </div>

        {/* Destination Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Destination</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="/destinations/asia" className="block px-2 py-1 hover:text-gray-300">Asia</a>
            <a href="/destinations/europe" className="block px-2 py-1 hover:text-gray-300">Europe</a>
            <a href="/destinations/africa" className="block px-2 py-1 hover:text-gray-300">Africa</a>
            <a href="/destinations/america" className="block px-2 py-1 hover:text-gray-300">America</a>
          </div>
        </div>

        {/* Blog Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <span>Blog</span>
          <FaChevronDown size={12} className="mt-[1px]" />
          <div className="absolute hidden group-hover:block bg-[rgba(30,30,30,0.6)] backdrop-blur text-gray-100 rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">Latest Posts</a>
            <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">Travel Tips</a>
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
            <a href="/" className="py-2 hover:text-gray-300">Home</a>
            <a href="/about-us" className="py-2 hover:text-gray-300">About Us</a>

            {/* Package */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Package</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <a href="/packages" className="block hover:text-gray-300">Package 1</a>
                <a href="/packages" className="block hover:text-gray-300">Package 2</a>
              </div>
            </div>

            {/* Destination */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Destination</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <a href="/destinations/asia" className="block hover:text-gray-300">Asia</a>
                <a href="/destinations/europe" className="block hover:text-gray-300">Europe</a>
                <a href="/destinations/africa" className="block hover:text-gray-300">Africa</a>
                <a href="/destinations/america" className="block hover:text-gray-300">America</a>
              </div>
            </div>

            {/* Blog */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <span>Blog</span>
                <FaChevronDown size={10} />
              </div>
              <div className="mt-2 space-y-1">
                <a href="/blogs/1" className="block hover:text-gray-300">Latest Posts</a>
                <a href="/blogs/1" className="block hover:text-gray-300">Travel Tips</a>
              </div>
            </div>

            <a href="/contact-us" className="py-2 hover:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
