"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { FaFaceFrown } from "react-icons/fa6";

const error = () => {
  return (
    <main
      className="flex lg:mx-50 lg:mt-90 h-fit
          md:m-25 md:mt-50 flex-col items-center justify-center gap-3 mt-35"
    >
      <FaFaceFrown className="size-15 text-gray-400" />
      <h2 className="text-xl font-semibold">Error Occured</h2>
      <p className="text-center">Page not found</p>
      <Link
        href="/my/blogs"
        className="mt-4 rounded-md px-4 py-2 text-sm text-white"
      >
        <Button>Go to Home</Button>
      </Link>
    </main>
  );
};

export default error;
