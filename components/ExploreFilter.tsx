"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DropDownButton from "./DropDownButton";

const ExploreFilter = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open

  const packageRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const handlePackageClick = () => {
    setOpenDropdown(openDropdown === "package" ? null : "package");
  };

  const handleDestinationClick = () => {
    setOpenDropdown(openDropdown === "destination" ? null : "destination");
  };

  const handleBlogClick = () => {
    setOpenDropdown(openDropdown === "blog" ? null : "blog");
  };

  const openDropdownRef = useRef(openDropdown);
  useEffect(() => {
    openDropdownRef.current = openDropdown;
  }, [openDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const currentOpen = openDropdownRef.current;
      if (
        (currentOpen === "package" &&
          packageRef.current &&
          !packageRef.current.contains(target)) ||
        (currentOpen === "destination" &&
          destinationRef.current &&
          !destinationRef.current.contains(target)) ||
        (currentOpen === "blog" &&
          blogRef.current &&
          !blogRef.current.contains(target))
      ) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="w-full text-lg lg:h-20 md:w-fit lg:mx-0 sm:w-100 flex lg:gap-20 md:gap-15 text-[#9B9B9B] px-5 md:px-5 rounded-xl md:rounded-full items-center md:bg-white flex-col sm:mx-0 mx-2 md:flex-row gap-3 py-5 md:py-3 bg-gray-50/90 shadow-lg">
      <div ref={packageRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "package"}
          color="gray"
          onClick={handlePackageClick}
        >
          Package
        </DropDownButton>
        {openDropdown === "package" && (
          <div
            className="absolute top-11.5 left-0 inset-0 h-fit z-10 ring-2 ring-gray-200 
            bg-white p-2 rounded-sm text-base shadow-lg"
          >
            Packages Content
          </div>
        )}
      </div>

      <div ref={destinationRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "destination"}
          color="gray"
          onClick={handleDestinationClick}
        >
          Destination
        </DropDownButton>
        {openDropdown === "destination" && (
          <div
            className="absolute top-11.5 left-0 inset-0 h-fit z-10 ring-2 ring-gray-200 
            bg-white p-2 rounded-sm text-base shadow-lg"
          >
            Destinations Content
          </div>
        )}
      </div>

      <div ref={blogRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "blog"}
          color="gray"
          onClick={handleBlogClick}
        >
          Blog
        </DropDownButton>
        {openDropdown === "blog" && (
          <div
            className="absolute top-11.5 left-0 inset-0 h-fit z-10 ring-2 ring-gray-200 
            bg-white p-2 rounded-sm text-base shadow-lg"
          >
            Blogs Content
          </div>
        )}
      </div>

      <div className="md:mr-[-8px]">
        <Button>Explore Now</Button>
      </div>
    </div>
  );
};

export default ExploreFilter;
