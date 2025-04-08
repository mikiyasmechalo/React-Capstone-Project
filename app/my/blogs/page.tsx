import React from "react";
import { blogs } from "@/data.tsx/blogs";
import Button from "@/components/Button";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <main className="relative ">
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1060px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]" // Added responsive height classes
        >
          <Image
            src="/blog-images/blogs-cover.jpg"
            alt="Blog Cover"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div
          className="absolute top-0 left-0 z-10 text-center lg:my-100 h-fit
          md:mt-60 flex flex-col m-auto items-center justify-center gap-10 mt-30 inset-0 max-w-3xl"
        >
          <h1
            className={`lg:text-8xl md:text-8xl font-bold text-white  text-center sm:text-6xl text-5xl `}
          >
            Latest Blogs
          </h1>
        </div>
      </main>
      <div className="container mx-auto p-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden flex flex-col rounded-lg shadow-md transition-shadow hover:shadow-lg bg-white gap-5"
            >
              <div className="relative">
                <Image
                  src={blog.sections[0]?.image || "/placeholder.png"} // Provide a default
                  alt={blog.title}
                  width={400} // Set appropriate values
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  By {blog.author} on {blog.date}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {blog.sections[0].content}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/blogs/${blog.id}`} className="mt-auto">
                  <Button>Read More</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
