import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  text?: string;
}

const images: ImageData[] = [
  {
    src: "/bali-img.png",
    alt: "Bali",
    width: 675,
    height: 675,
    text: "Bali",
  },
  {
    src: "/dubai-img.png",
    alt: "Dubai",
    width: 675,
    height: 328,
    text: "Dubai",
  },
  {
    src: "/paris-img.png",
    alt: "Bali",
    width: 328,
    height: 328,
    text: "Paris",
  },
  {
    src: "/italy-img.png",
    alt: "Bali",
    width: 328,
    height: 328,
    text: "Italy",
  },
];
const GallerySection = () => {
  return (
    <div className="flex sm:gap-20 xs:gap-10 gap-5 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-grayCustom sm:text-4xl xs:text-2xl text-lg font-medium sm:leading-18">
          Gallery
        </h3>
        <h2 className="md:text-6xl sm:text-4xl xs:text-3xl text-xl font-semibold text-center">
          Unforgettable moment
        </h2>
      </div>
      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-4 sm:gap-5 gap-2 relative">
        {images.map((image, index) => {
          let className = "";
          if (index === 0) {
            className = "row-span-2 col-span-2";
          } else if (index === 1) {
            className = "col-span-2";
          } else {
            className = "";
          }
          return (
            <div key={index} className={`${className} relative rounded-10`}>
              <Link href="/my/packages" className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-cover hover:shadow-lg hover:shadow-gray-400  rounded-10"
                  />
                  {image.text && (
                    <div className="absolute bottom-2 left-2 md:leading-18 text-white px-2 py-1 rounded-md sm:text-4xl xs:text-3xl text-2xl">
                      {image.text}
                    </div>
                  )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GallerySection;
