"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import DropDownButton from "../ui/DropDownButton";
import { DropDownMenu, DropDownMenuItem } from "../ui/DropDownButton";
import { useRouter } from "next/navigation";
import { destinations } from "@/data/my-destinations-data";
import ReactDatePicker from "react-datepicker";
import { parseISO } from "date-fns";
import { usePathname } from "next/navigation";

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
  const path = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      filters.location === "" &&
      filters.date === "" &&
      filters.people === ""
    ) {
      alert("Please fill atlest 1 field");
      return;
    }
    const query = new URLSearchParams(filters).toString();
    const link = path.includes("my") ? "/my/destnations" : "/destinations";
    router.push(`${link}?${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-120 sm:max-w-full text-lg xs:mx-auto mx-2 lg:h-20 md:w-fit lg:mx-0 sm:w-100 flex lg:gap-20 lg:min-w-3xl
        md:gap-15 text-gray-300 px-5 md:px-5 rounded-xl md:rounded-full items-center 
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
        <DropDownMenu
          open={openDropdown === "location"}
          className="min-w-full items-center"
        >
          {destinations.slice(0, 3).map((item) => (
            <DropDownMenuItem
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownChange("location", item.country);
              }}
            >
              {item.country}
            </DropDownMenuItem>
          ))}
          <DropDownMenuItem
            key={"more"}
            onClick={(e) => {
              e.preventDefault();
              router.push("/packages");
            }}
          >
            more +
          </DropDownMenuItem>
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
        <DropDownMenu open={openDropdown === "date"} className="min-w-50">
          <div className="px-1">
            <ReactDatePicker
              selected={filters.date ? parseISO(filters.date) : null}
              onChange={(date: Date | null) => {
                if (date) {
                  handleDropdownChange(
                    "date",
                    date.toISOString().split("T")[0]
                  );
                }
              }}
              dateFormat="yyyy-MM-dd"
              className="w-full border border-gray-300 p-2 rounded-md text-sm"
              placeholderText="Select a date"
            />
          </div>
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
        <DropDownMenu open={openDropdown === "people"} className="min-w-32">
          {["1", "2", "3", "4 +"].map((item) => (
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
