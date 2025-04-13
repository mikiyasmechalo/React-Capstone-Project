import { SearchIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#", active: false },
    { name: "Package", href: "#", active: false, hasDropdown: true },
    { name: "Destination", href: "#", active: false, hasDropdown: true },
    { name: "Blog", href: "#", active: false, hasDropdown: true },
    { name: "Contact", href: "#", active: false },
  ];

  // Author info data
  const authorInfo = [
    {
      icon: "/vector-7.svg",
      text: "Hasmar",
      alt: "Author icon",
    },
    {
      icon: "/group-88.png",
      text: "January 18, 2021",
      alt: "Calendar icon",
    },
    {
      icon: "/vector-4.svg",
      text: "Stories, Tips",
      alt: "Category icon",
    },
  ];

  return (
    <header className="relative w-full h-[860px] bg-transparent">
      <div className="relative w-full h-full">
        {/* Background image with overlay */}
        <div className="relative w-full h-full">
          <img
            className="absolute w-full h-full top-0 left-0 blur-[2px] object-cover"
            alt="Travel background"
            src="/unsplash-nxet8dolkhu.png"
          />
          <div className="absolute w-full h-32 top-0 left-0 bg-[#120a0a82]" />
        </div>

        {/* Navigation bar */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-7">
          {/* Logo */}
          <img
            className="h-[82px] object-cover"
            alt="Logo"
            src="/logo1-3.png"
          />

          {/* Navigation menu */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`flex items-center font-['Poppins',Helvetica] font-semibold text-lg ${item.active ? "text-white" : "text-[#ffffffcc]"}`}
                    href={item.href}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <img
                        className="w-4 h-2.5 ml-2"
                        alt="Dropdown arrow"
                        src="/vector-3.svg"
                      />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* SearchIcon icon */}
          <SearchIcon className="w-[21px] h-[21px] text-white" />
        </div>

        {/* Hero content */}
        <div className="absolute top-[280px] left-0 right-0 mx-auto w-full max-w-[1283px] text-center">
          <h1 className="font-['Poppins',Helvetica] font-bold text-white text-[64px] leading-[75px]">
            Travel Stories For Now <br />
            and the Future
          </h1>

          {/* Author info */}
          <div className="flex items-center justify-center gap-16 mt-[40px]">
            {authorInfo.map((info, index) => (
              <div key={index} className="flex items-center h-[70px]">
                <img className="h-[21px] mr-3" alt={info.alt} src={info.icon} />
                <span className="font-['Poppins',Helvetica] font-medium text-white text-2xl whitespace-nowrap">
                  {info.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
