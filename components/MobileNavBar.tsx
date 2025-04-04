import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Button from "./Button";

const MobileNavBar = () => {
  return (
    <div
      className="relative flex items-center text-black z-10 
        md:hidden bg-[#120B0B82]/50 justify-between p-2"
    >
      <div className="flex relative">
        <Image src={logo} alt="logo" className="relative" height={56} />
      </div>

      <div className="">
        <Button> Explore</Button>
      </div>
    </div>
  );
};

export default MobileNavBar;
