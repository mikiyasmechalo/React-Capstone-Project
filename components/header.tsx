"use client";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-header-bg absolute z-[999] w-full text-white px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Rebel Rover Logo"
          className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[357px] mr-4"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-[50px] text-sm font-medium">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about-us" className="hover:text-gray-300 whitespace-nowrap">
          About Us
        </a>

        {/* Package Dropdown */}
        <div className="relative group">
          <div className="hover:text-gray-300 cursor-pointer">Package</div>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="/packages" className="block px-2 py-1 hover:text-gray-300">
              Package 1
            </a>
            <a href="/packages" className="block px-2 py-1 hover:text-gray-300">
              Package 2
            </a>
          </div>
        </div>

        <a href="/packages" className="hover:text-gray-300">
          Destination
        </a>

        {/* Blog Dropdown */}
        <div className="relative group">
          <div className="hover:text-gray-300 cursor-pointer">Blog</div>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">
              Latest Posts
            </a>
            <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">
              Travel Tips
            </a>
          </div>
        </div>

        <a href="/contact-us" className="hover:text-gray-300">
          Contact
        </a>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="bg-gray-600 p-2 rounded-full text-white hover:bg-gray-700"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-800 text-white md:hidden">
          <div className="flex flex-col items-center py-4">
            <a href="/" className="py-2 hover:text-gray-300">
              Home
            </a>
            <a href="/about-us" className="py-2 hover:text-gray-300">
              About Us
            </a>
            <div className="relative group">
              <div className="py-2 cursor-pointer">Package</div>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
                <a href="/packages" className="block px-2 py-1 hover:text-gray-300">
                  Package 1
                </a>
                <a href="/packages" className="block px-2 py-1 hover:text-gray-300">
                  Package 2
                </a>
              </div>
            </div>
            <a href="/packages" className="py-2 hover:text-gray-300">
              Destination
            </a>
            <div className="relative group">
              <div className="py-2 cursor-pointer">Blog</div>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
                <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">
                  Latest Posts
                </a>
                <a href="/blogs/1" className="block px-2 py-1 hover:text-gray-300">
                  Travel Tips
                </a>
              </div>
            </div>
            <a href="/contact-us" className="py-2 hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Search Icon */}
      <div className="ml-2 sm:ml-4 cursor-pointer hover:text-gray-300">
        <FaSearch size={18} />
      </div>
    </header>
  );
};

export default Header;
