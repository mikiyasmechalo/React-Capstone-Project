"use client";
import React from "react";
import Button from "./Button";
import DropDownButton from "./DropDownButton";

const ExploreFilter = () => {
  return (
    <div
      className="text-lg lg:h-20 md:w-fit lg:mx-0 flex lg:gap-20 md:gap-15
      text-[#9B9B9B] px-20 md:px-5 rounded-3xl md:rounded-full items-center 
      md:bg-white flex-col md:flex-row gap-3 py-5 bg-gray-50"
    >
      <DropDownButton color="gray" onClick={() => {}}>
        Package
      </DropDownButton>
      <DropDownButton color="gray" onClick={() => {}}>
        Destination
      </DropDownButton>
      <DropDownButton color="gray" onClick={() => {}}>
        Blog
      </DropDownButton>
      <div className="mr-[-8px]">
        <Button>Explore Now</Button>
      </div>
    </div>
  );
};

export default ExploreFilter;
