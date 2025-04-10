import Image from "next/image";
import React from "react";

const FounderQuote = () => {
  return (
    <div className="flex items-center justify-center lg:gap-34 sm:gap-15 gap-10 sm:text-lg font-medium flex-col lg:flex-row">
      <Image
        src={"/founder-img.png"}
        alt="founder-quote"
        width={550}
        height={577}
        style={{ objectFit: "contain" }}
      />
      <div className="flex flex-col lg:gap-15 gap-8 text-gray-900 max-w-[676px]">
        <div className="md:h-16 md:w-20 h-8 w-10">
          <QuoteIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          porttitor sapien et urna tincidunt fringilla. Vivamus at augue
          interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
          Suspendisse suscipit est et neque.
        </p>
        <p>
          Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada
          ipsum. Pellentesque nec turpis viverra, blandit mi a, accumsan justo.
        </p>
        <div className="flex flex-col">
          <h3 className="sm:text-4xl text-3xl sm:leading-18 font-semibold">
            Siti Sarah
          </h3>
          <p>Founder Travosca</p>
        </div>
      </div>
    </div>
  );
};

export default FounderQuote;

export const QuoteIcon = () => {
  return (
    <div className="size-full">
      <svg
        width=""
        height=""
        viewBox="0 0 81 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.76401 9.90384C13.376 3.81984 21.868 0.73584 33 0.73584H37V12.0118L33.784 12.6558C28.304 13.7518 24.492 15.9078 22.452 19.0718C21.3876 20.7764 20.7839 22.728 20.7 24.7358H33C34.0609 24.7358 35.0783 25.1573 35.8284 25.9074C36.5786 26.6576 37 27.675 37 28.7358V56.7358C37 61.1478 33.412 64.7358 29 64.7358H5.00001C3.93914 64.7358 2.92172 64.3144 2.17158 63.5643C1.42143 62.8141 1 61.7967 1 60.7358V40.7358L1.012 29.0598C0.976005 28.6158 0.216005 18.0958 7.76401 9.90384ZM73 64.7358H49C47.9391 64.7358 46.9217 64.3144 46.1716 63.5643C45.4214 62.8141 45 61.7967 45 60.7358V40.7358L45.012 29.0598C44.976 28.6158 44.216 18.0958 51.764 9.90384C57.376 3.81984 65.868 0.73584 77 0.73584H81V12.0118L77.784 12.6558C72.304 13.7518 68.492 15.9078 66.452 19.0718C65.3876 20.7764 64.7839 22.728 64.7 24.7358H77C78.0609 24.7358 79.0783 25.1573 79.8284 25.9074C80.5786 26.6576 81 27.675 81 28.7358V56.7358C81 61.1478 77.412 64.7358 73 64.7358Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
