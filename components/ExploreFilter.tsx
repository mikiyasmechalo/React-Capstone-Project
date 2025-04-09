"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DropDownButton from "./DropDownButton";
import { DropDownMenu, DropDownMenuItem } from "./DropDownButton";
import { useRouter } from "next/navigation";

const ExploreFilter = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    people: "",
  });

  const locationRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleDropdownChange = (
    type: "location" | "date" | "people",
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setOpenDropdown(null);
  };

  const handleDropdownClick = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
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
        (currentOpen === "location" &&
          locationRef.current &&
          !locationRef.current.contains(target)) ||
        (currentOpen === "date" &&
          dateRef.current &&
          !dateRef.current.contains(target)) ||
        (currentOpen === "people" &&
          peopleRef.current &&
          !peopleRef.current.contains(target))
      ) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    router.push(`/explore?${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-lg xs:mx-10 mx-2 lg:h-20 md:w-fit lg:mx-0 sm:w-100 flex lg:gap-20 
        md:gap-15 text-[#9B9B9B] px-5 md:px-5 rounded-xl md:rounded-full items-center 
        md:bg-white flex-col sm:mx-0 md:flex-row gap-3 py-5 md:py-3 bg-gray-50/90 shadow-lg"
    >
      <div ref={locationRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "location"}
          color="gray"
          onClick={(e) => {
            e.preventDefault();
            handleDropdownClick("location");
          }}
        >
          {filters.location || "Location"}
        </DropDownButton>
        <DropDownMenu open={openDropdown === "location"}>
          {["Paris", "Rome", "London"].map((item) => (
            <DropDownMenuItem
              key={item}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownChange("location", item);
              }}
            >
              {item}
            </DropDownMenuItem>
          ))}
        </DropDownMenu>
      </div>

      <div ref={dateRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "date"}
          color="gray"
          onClick={(e) => {
            e.preventDefault();
            handleDropdownClick("date");
          }}
        >
          {filters.date || "Date"}
        </DropDownButton>
        <DropDownMenu open={openDropdown === "date"}>
          {["April", "May", "June"].map((item) => (
            <DropDownMenuItem
              key={item}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownChange("date", item);
              }}
            >
              {item}
            </DropDownMenuItem>
          ))}
        </DropDownMenu>
      </div>

      <div ref={peopleRef} className="relative w-full">
        <DropDownButton
          open={openDropdown === "people"}
          color="gray"
          onClick={(e) => {
            e.preventDefault();
            handleDropdownClick("people");
          }}
        >
          {filters.people || "People"}
        </DropDownButton>
        <DropDownMenu open={openDropdown === "people"}>
          {["1", "2", "3", "4+"].map((item) => (
            <DropDownMenuItem
              key={item}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownChange("people", item);
              }}
            >
              {item}
            </DropDownMenuItem>
          ))}
        </DropDownMenu>
      </div>

      <div className="md:mr-[-8px]">
        <button type="submit">
          <Button>Explore Now</Button>
        </button>
      </div>
    </form>
  );
};

export default ExploreFilter;
