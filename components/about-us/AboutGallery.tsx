import React from "react";
import Image from "next/image";

const AboutGallery = () => {
  const destinations = [
    {
      category: "Bali",
      image: "/bali.png",
      alt: "Bali",
      position: "left",
    },
    {
      category: "Dubai",
      image: "/dubai.png",
      alt: "Dubai skyline",
      featured: true,
    },
    {
      category: "Paris",
      image: "/paris.png",
      alt: "Paris cityscape",
      featured: false,
    },
    {
      category: "Italy",
      image: "/italy.png",
      alt: "Italian landscape",
      featured: false,
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className=" text-lg sm:text-xl text-gray-600">Gallery</h2>
          <p className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Unforgettable moments
          </p>
        </div>
        {/* Main Gallery Layout - Fixed height container */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 h-full">
          {/* Bali - Left Side Image */}
          {destinations
            .filter((d) => d.position === "left")
            .map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-full w-full">
                  {" "}
                  {/* Fixed height container */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={1200}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.category}
                  </h3>
                </div>
              </div>
            ))}

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 h-full">
            {/* Dubai - Top Right Image */}
            {destinations
              .filter((d) => d.featured)
              .map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg flex-1"
                >
                  <div className="h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.category}
                    </h3>
                  </div>
                </div>
              ))}

            {/* Paris and Italy - Bottom Right Images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 h-full">
              {destinations
                .filter((d) => !d.featured && d.position !== "left")
                .map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="h-full w-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {item.category}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
