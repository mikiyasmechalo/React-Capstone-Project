import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { FaFaceFrown } from "react-icons/fa6";

const notFound = () => {
  return (
    <main
      className="flex lg:mx-50 lg:mt-90 h-fit
          md:m-25 md:mt-50 flex-col items-center justify-center gap-3 mt-35"
    >
      <FaFaceFrown className="size-15 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p className="text-center">Could not find the requested Blog.</p>
      <Link
        href="/my/blogs"
        className="mt-4 rounded-md px-4 py-2 text-sm text-white"
      >
        <Button>Go Back</Button>
      </Link>
    </main>
  );
};

export default notFound;
