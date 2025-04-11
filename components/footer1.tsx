import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 relative">
      {/* Subscribe Section */}
      <div
        className="bg-cover bg-center py-16 text-center text-white"
        style={{ backgroundImage: "url(/footer-img.png)" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Subscribe to get special price
        </h2>
        <p className="mb-6">
          Don’t wanna miss something? Subscribe right now and get special
          promotion and monthly newsletter.
        </p>
        <div className="flex justify-center px-4">
          <div className="flex w-full max-w-xl h-[60px]">
            <input
              type="email"
              placeholder="Type your email here"
              className="rounded-l-full px-4 h-full flex-grow bg-white text-black focus:outline-none"
            />
            <button className="bg-black text-white rounded-r-full px-6 h-full hover:bg-gray-800 w-[120px] sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Logo + Description */}
          <div className="max-w-md mb-8 md:mb-0 sm:ml-8">
            <img
              src="/logo-1.png"
              alt="Rebel Rover Logo"
              className="w-[200px] md:w-[300px] mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-600 leading-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0 sm:ml-8">
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <p className="flex items-center gap-2 text-sm mb-2">
              <MdLocationOn /> 732 Despard St, Atlanta
            </p>
            <p className="flex items-center gap-2 text-sm mb-2">
              <MdPhone /> +97 888 8888
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdEmail /> info@traveller.com
            </p>
          </div>

          {/* Quick Links (not linked) */}
          <div className="mb-8 md:mb-0 sm:ml-8">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/packages">Packages</a>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons (linked) */}
          <div className="mb-8 md:mb-0 sm:ml-8">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-lg justify-center md:justify-start">
              <a
                href="https://www.facebook.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/creativechroma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="bg-black text-white py-4 text-center text-sm">
        Copyright © All rights reserved (Website Developed & Managed by{" "}
        <span className="font-semibold">CREATIVECHROMA</span>)
      </div>
    </footer>
  );
};

export default Footer;
