"use client";
import React, { useEffect, useRef } from 'react'

const SearchBar = ({
    isOpen,
    onChange,
    searchRef,
    className,
  }: {
    isOpen: boolean;
    onChange: (value: string) => void;
    searchRef: React.RefObject<HTMLDivElement | null>;
    className?: string;
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isOpen]);
  
    if (!isOpen) return null;
  
    return (
      <div ref={searchRef} className="relative">
        <input
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search destinations..."
          className={`w-50 p-2 bg-white/70 text-black placeholder:text-gray-500 rounded-md outline-none ${className}`}
        />
      </div>
    );
  };

export default SearchBar;