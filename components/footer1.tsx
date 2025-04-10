import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 relative">
      {/* Subscribe Section */}
      <div
        className="bg-cover bg-center py-16 text-center text-white"
        style={{ backgroundImage: `url(/footer-img.png)` }} // Update path for background image
      >
        <h2 className="text-3xl font-bold mb-2">
          Subscribe to get special price
        </h2>
        <p className="mb-6">
          Don’t wanna miss something? Subscribe right now and get special
          promotion and monthly newsletter.
        </p>
        <div className="flex justify-center">
          <div className="flex w-[676px] h-[69px]">
            <input
              type="email"
              placeholder="Type your email here"
              className="rounded-l-full px-6 h-full flex-grow text-black focus:outline-none"
            />
            <button className="bg-black text-white rounded-r-full px-6 h-full hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-20 py-12 border-t border-gray-200">
        <div className="flex items-start justify-between">
          {/* Rebel Rover Logo Section */}
          <div
            className="text-left"
            style={{
              width: "394px",
              height: "91px",
              marginLeft: "40px", // Added margin to push contact information to the right
            }}
          >
            <img
              src="/logo1.png" // Update path for the logo
              alt="Rebel Rover Logo"
              style={{ width: "394px", height: "91px" }}
              className="mb-2"
            />
            <p
              className="text-sm text-gray-600 mt-2"
              style={{
                width: "437px",
                height: "50px",
                marginLeft: "6px",
                fontFamily: "Poppins, sans-serif", // Set Poppins font
                fontWeight: "500", // Set font weight to 500
                fontSize: "18px", // Set font size to 18px
                lineHeight: "25px", // Set line height to 25px
                letterSpacing: "0%", // Set letter spacing to 0%
                verticalAlign: "middle", // Align text vertically
                wordWrap: "break-word", // Make sure the text wraps if needed
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>

          {/* Contact Information */}
          <div
            className="text-left"
            style={{ width: "253px", height: "162px", marginLeft: "30px" }}
          >
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <p className="flex items-center gap-2 text-sm">
              <MdLocationOn /> 732 Despard St, Atlanta
            </p>
            <p className="flex items-center gap-2 text-sm mt-2">
              <MdPhone /> +97 888 8888
            </p>
            <p className="flex items-center gap-2 text-sm mt-2">
              <MdEmail /> info@traveller.com
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="text-left"
            style={{ width: "124px", height: "223px", marginLeft: "30px" }}
          >
            <h4 className="font-semibold mb-3">Quick Link</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div
            className="text-left"
            style={{
              width: "173px", // Set the width
              height: "93.46px", // Set the height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Adjust spacing between icons
              gap: "10px", // Add space between icons
            }}
          >
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-lg">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="bg-black text-white py-4 pr-6 text-sm text-center">
        Copyright © All rights reserved (Website Developed & Managed by{" "}
        <span className="font-semibold">CREATIVECHROMA</span>)
      </div>
    </footer>
  );
};

export default Footer;
