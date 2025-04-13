import React from "react";
import Button from "@/components/ui/Button";

const SendMessage = () => {
  return (
    <div className="bg-white text-lg md:py-18 md:px-10 px-3 py-3 rounded-lg shadow-md w-full max-w-md mx-auto">
      <form>
        {/*technically the paddimng for the inputs should be 4 but it looks very wide */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[5px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[5px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[5px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            rows={4}
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[5px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          ></textarea>
        </div>
        <div className="w-full">
          <button type="submit" className="w-full">
            <Button>Send Message</Button>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
