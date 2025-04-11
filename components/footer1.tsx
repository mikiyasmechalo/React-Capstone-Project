import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 relative text-sm">
      {/* Subscribe Section */}
      <div
        className="bg-cover bg-center py-16 px-4 text-center text-white"
        style={{ backgroundImage: "url(/footer-img.png)" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
          Subscribe to get special price
        </h2>
        <p className="mb-6 max-w-md mx-auto text-white">
          Don’t wanna miss something? Subscribe right now and get special
          promotion and monthly newsletter.
        </p>
        <div className="flex justify-center">
          <div className="flex w-full max-w-xl items-center bg-white rounded-full px-2 py-2">
            <input
              type="email"
              placeholder="Type your email here"
              className="flex-grow min-w-0 px-4 py-2 text-sm text-black focus:outline-none rounded-full mr-2"
            />
            <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 rounded-full min-w-[110px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Logo + Description */}
          <div className="max-w-md">
            <img
              src="/logo-1.png"
              alt="Rebel Rover Logo"
              className="w-40 md:w-60 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-600 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-3 text-black">Contact Information</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <MdLocationOn className="text-lg" />
                732 Despard St, Atlanta
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-lg" />
                +97 888 8888
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                info@traveller.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/packages" className="hover:underline">Packages</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3 text-black">Follow Us</h4>
            <div className="flex space-x-4 text-lg justify-center md:justify-start">
              <a
                href="https://www.facebook.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="bg-black text-white py-4 text-center text-xs sm:text-sm px-2">
        Copyright © All rights reserved — Website Developed & Managed by{" "}
        <span className="font-semibold">CREATIVECHROMA</span>
      </div>
    </footer>
  );
};

export default Footer;
