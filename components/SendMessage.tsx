import React from "react";

const SendMessage = () => {
  return (
    <div className="bg-white text-lg py-18 px-10 rounded-lg shadow-md w-full max-w-md mx-auto">
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
        <button
          type="submit"
          className="bg-black text-white rounded-full py-2 px-6 w-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
