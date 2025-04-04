import React from "react";
import Button from "./Button";

const EmailSubmit = () => {
  return (
    <form
      className="z-10 relative flex flex-col sm:flex-row items-center justify-center 
       gap-3 bg-white sm:p-1.5 p-3 rounded-3xl md:rounded-full shadow-md 
      w-full max-w-2xl border border-[#C4C4C4] sm:border-none"
      action={""}
    >
      <input
        type="email"
        name=""
        id=""
        placeholder="Type your email here"
        className="text-black text-base sm:text-xl font-medium flex-1 
        focus:outline-none focus:ring focus:ring-black rounded-full px-3 h-full w-full 
        shadow-sm sm:shadow-none py-3 sm:p-0 sm:pl-3"
      />
      <Button className=" sm:w-auto">Subscribe</Button>
    </form>
  );
};

export default EmailSubmit;
