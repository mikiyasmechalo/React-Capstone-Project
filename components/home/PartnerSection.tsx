import { partner_images } from "@/data/partner-images";
import Image from "next/image";
import React from "react";

const PartnerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 md:pt-5 md:mb-10 px-5">
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="md:text-6xl md:leading-18 sm:text-5xl text-4xl font-semibold pb-6">
          Our tour partners
        </h2>
        <p className="text-grayCustom md:text-lg text-sm font-medium max-w-xl">
          There are many variation of passage of lorem ipsum available but the
          majority have suffered alteration
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center py-10 md:gap-10 gap-5">
        {partner_images.map((item, index) => (
          <div key={index}>
            <Image
            width={1000}
            height={1000}
              src={item.img}
              alt={item.name}
              className="sm:h-[35px] h-[30px] md:h-[40px] lg:h-[50px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
