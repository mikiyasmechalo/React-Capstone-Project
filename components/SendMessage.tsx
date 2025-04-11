"use client";

import React from "react";

const SendMessage = () => {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href =
      "mailto:contact@domain.com?subject=New Message&body=Message Content";
  };

  return (
    <div className="w-[500px] h-[500px] bg-white p-6 rounded-lg shadow-lg border border-white"  style={{ marginLeft: "-50px" }}>
      <form className="flex flex-col justify-between h-full" onSubmit={handleClick}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Mail"
            className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-200 px-4 py-2 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-black text-white py-2 rounded-[33px] hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
