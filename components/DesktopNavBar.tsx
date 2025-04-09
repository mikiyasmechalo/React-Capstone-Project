"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import DropDownButton, { DropDownMenu, DropDownMenuItem } from "./DropDownButton";

interface DropDownProps {
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
}



const DesktopNavBar = () => {
  const [packageOpen, setPackageOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const packageRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        packageRef.current &&
        !packageRef.current.contains(event.target as Node)
      ) {
        setPackageOpen(false);
      }
      if (
        destinationRef.current &&
        !destinationRef.current.contains(event.target as Node)
      ) {
        setDestinationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50 hidden md:block">
      <div
        className={`h-24 md:h-28 lg:h-32 px-4 md:px-8 md:pl-4 lg:px-14 
         bg-[#120B0B82]/50 text-white font-semibold 
          flex items-center justify-between`}
      >
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Rebel Rover Home">
            <Image
              src={logo}
              alt="Rebel Rover logo"
              className="object-contain h-auto w-36 md:w-70 lg:w-90"
            />
          </Link>
        </div>

        <nav className="flex items-center">
          <div
            className="flex items-center justify-end gap-4 md:gap-6 lg:gap-10 
                       text-base lg:text-lg"
          >
            <Link
              href={"/"}
              className="hidden lg:block hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="hover:text-gray-300 transition-colors text-nowrap"
            >
              About Us
            </Link>
            <Link
              href={"/blogs"}
              className="hover:text-gray-300 transition-colors text-nowrap"
            >
              Blogs
            </Link>
            <div ref={packageRef} className="relative">
              <DropDownButton
                open={packageOpen}
                onClick={() => setPackageOpen(!packageOpen)}
              >
                Package
              </DropDownButton>
              <DropDownMenu open={packageOpen}>
                <DropDownMenuItem href={"#"}>Package 1</DropDownMenuItem>
                <DropDownMenuItem href={"#"}>Package 2</DropDownMenuItem>
                <DropDownMenuItem href={"#"}>Package 3</DropDownMenuItem>
              </DropDownMenu>
            </div>
            <div ref={destinationRef} className="relative">
              <DropDownButton
                open={destinationOpen}
                onClick={() => setDestinationOpen(!destinationOpen)}
              >
                Destination
              </DropDownButton>
              <DropDownMenu open={destinationOpen}>
                <DropDownMenuItem href={"#"}>Destination 1</DropDownMenuItem>
                <DropDownMenuItem href={"#"}>Destination 2</DropDownMenuItem>
                <DropDownMenuItem href={"#"}>Destination 3</DropDownMenuItem>
              </DropDownMenu>
            </div>
            <Link
              href={"/contact-us"}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <button
              aria-label="Search"
              className="hover:text-gray-300 transition-colors"
            >
              <AiOutlineSearch size={25} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNavBar;
