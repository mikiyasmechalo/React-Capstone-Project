"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import clsx from "clsx";

import DropDownButton, {
  DropDownMenu,
  DropDownMenuItem,
} from "@/components/DropDownButton";
import { justDestinations } from "@/data/my-destinations-data";
import SearchBar from "./ui/SearchBar";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [packageOpen, setPackageOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { country: string; linkTo: string; id: string }[]
  >([]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = justDestinations.filter((item) =>
        item.country.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const packageRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

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
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !searchResultsRef.current?.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const pathname = usePathname();

  const navLinks = (
    <>
      {(() => {

        const linkClass = (href: string) =>
          clsx(
            "hover:text-white transition-colors",
            pathname === href ? "text-white" : "text-white/80"
          );

        return (
          <>
            <Link href="/my" className={linkClass("/my")}>
              Home
            </Link>

            <Link href="/my/about-us" className={linkClass("/my/about-us")}>
              About Us
            </Link>

            <Link href="/my/blogs" className={linkClass("/my/blogs")}>
              Blogs
            </Link>

            <div ref={packageRef} className="relative">
              <DropDownButton
                open={packageOpen}
                onClick={() => setPackageOpen(!packageOpen)}
                color="white"
                className={`${linkClass("/mu")} text-white/80`}
              >
                Packages
              </DropDownButton>
              <DropDownMenu
                open={packageOpen}
                onClick={() => setPackageOpen(!packageOpen)}
              >
                <DropDownMenuItem href="/my/packages">
                Hotel + Car
                </DropDownMenuItem>
                <DropDownMenuItem href="/my/packages">
                Hotel + Plane
                </DropDownMenuItem>
                <DropDownMenuItem href="/my/packages">
                Hotel only
                </DropDownMenuItem>
                <DropDownMenuItem href="/my/packages">
                Hotel + Tour
                </DropDownMenuItem>
              </DropDownMenu>
            </div>

            {!searchOpen && (
              <div ref={destinationRef} className="relative">
                <DropDownButton
                  open={destinationOpen}
                  onClick={() => setDestinationOpen(!destinationOpen)}
                  color="white"
                  className={`${linkClass("/mu")} text-white/80`}
                >
                  Destinations
                </DropDownButton>
                <DropDownMenu
                  open={destinationOpen}
                  onClick={() => setDestinationOpen(!destinationOpen)}
                >
                  {justDestinations.slice(3, 8).map(item => (
                    <DropDownMenuItem key={item.id} href="/my/packages">
                      {item.country}
                    </DropDownMenuItem>
                  ))}
                </DropDownMenu>
              </div>
            )}

            <Link href="/my/contact-us" className={linkClass("/my/contact-us")}>
              Contact
            </Link>
          </>
        );
      })()}
    </>
  );

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#120B0B82]/50 text-white h-fit">
      <div className="flex items-center justify-between p-2 md:px-4 lg:px-14 h-17 md:h-28 lg:h-32">
        <div className="flex-shrink-0 h-full flex items-center">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="md:hidden p-2 flex items-center"
          >
            <BiMenu size={30} />
          </button>
          <Link href="/my" aria-label="Rebel Rover Home">
            <Image
              src={logo}
              alt="Rebel Rover logo"
              className="object-contain h-auto xs:w-50 w-35 md:w-70 lg:w-90"
            />
          </Link>
        </div>

        <nav className="flex xs:gap-5 lg:gap-8 justify-between sm:w-auto sm:h-auto h-fit w-fit">
          <span className="md:flex hidden items-center gap-4 md:gap-6 lg:gap-10 text-base lg:text-lg font-semibold">
            {navLinks}
          </span>
          {!searchOpen && (
            <button
              aria-label="Search"
              onClick={(e) => {
                e.preventDefault();
                setSearchOpen((prev) => !prev);
              }}
              className="hover:text-gray-300 transition-colors size-12 md:size-auto flex items-center justify-center"
            >
              <AiOutlineSearch className="size-7" />
            </button>
          )}
          <SearchBar
            isOpen={searchOpen}
            onChange={setQuery}
            searchRef={searchRef}
          />
          <div ref={searchResultsRef} className="relative right-55">
            {searchOpen && searchResults.length > 0 && (
              <DropDownMenu open={true} onClick={() => setSearchOpen(false)} className="max-h-96 overflow-y-auto overflow-x-hidden">
                {searchResults.map((item) => (
                  <DropDownMenuItem key={item.id} href={`${item.linkTo}`}>
                    {item.country}
                  </DropDownMenuItem>
                ))}
              </DropDownMenu>
            )}
          </div>
        </nav>
      </div>

      {mobileDropdownOpen && (
        <div
          ref={mobileDropdownRef}
          className="md:hidden px-2 pb-4 max-w-70 absolute left-3 top-0 min-w-60 w-fit"
        >
          <DropDownMenu open={mobileDropdownOpen} className="top-20">
            <DropDownMenuItem href="/my">Home</DropDownMenuItem>
            <DropDownMenuItem href="/my/about-us">About Us</DropDownMenuItem>
            <DropDownMenuItem href="/my/packages">Package</DropDownMenuItem>
            <DropDownMenuItem href="/my/blogs">Blogs</DropDownMenuItem>
            <DropDownMenuItem href="/my/contact-us">Contact</DropDownMenuItem>
          </DropDownMenu>
        </div>
      )}
    </header>
  );
};

export default NavBar;
