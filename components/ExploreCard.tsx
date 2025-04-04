import Image from "next/image";
import React from "react";
export interface CardData {
  id?: string | number;
  isPlaceholder?: boolean;
  nowViewing: boolean;
  title: string;
  imageSrc: string;
  description: string;
}
const ExploreCard = ({
  nowViewing,
  title,
  imageSrc,
  description,
}: CardData & { nowViewing: boolean }) => {
  return (
    <div
      className={`relative custom-transition flex flex-col items-center transition-all duration-500 ease-in-out
          ${
            nowViewing
              ? "bg-white shadow-lg rounded-lg"
              : "scale-[0.95] opacity-70 hover:opacity-80" 
          } w-full h-full overflow-hidden`}
    >
      <div
        className={`relative overflow-hidden transition-all duration-500 ease-in-out w-full
          ${nowViewing ? "h-64" : "h-70 rounded-lg"}`}
        style={{
          transform: nowViewing ? "scale(1)" : "scale(0.95)",
          transformOrigin: "center",
        }}
      >
        <Image
          src={imageSrc || "/explore-img.png"}
          alt="explore-img"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className={`p-3 relative w-full transition-all duration-500 ease-in-out ${
          nowViewing ? "opacity-100" : "opacity-0 max-h-0 py-0"
        }`}
      >
        {nowViewing && (
          <div className="relative flex-col flex">
            <div className="absolute right-0 top-[-50] ">
              <svg
                width="141"
                height="139"
                viewBox="0 0 141 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_32_114)">
                  <ellipse
                    cx="70.5"
                    cy="65.1268"
                    rx="39.5"
                    ry="38.072"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_32_114"
                    x="0"
                    y="0.0548096"
                    width="141"
                    height="138.144"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="15.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_32_114"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_32_114"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute right-15 top-1.5">
              <svg
                className="z-10"
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.984 0.0685592C24.552 1.89256 24.096 3.86056 23.616 5.97256C23.136 8.08456 22.704 10.1486 22.32 12.1646C21.936 14.1806 21.624 16.0286 21.384 17.7086H14.544L14.04 16.9166C14.472 15.2366 15.024 13.4366 15.696 11.5166C16.368 9.54856 17.112 7.58056 17.928 5.61256C18.744 3.64456 19.536 1.79656 20.304 0.0685592H24.984ZM11.664 0.0685592C11.232 1.89256 10.776 3.86056 10.296 5.97256C9.816 8.08456 9.384 10.1486 9 12.1646C8.616 14.1806 8.304 16.0286 8.064 17.7086H1.296L0.864 16.9166C1.296 15.2366 1.848 13.4366 2.52 11.5166C3.192 9.54856 3.912 7.58056 4.68 5.61256C5.496 3.64456 6.288 1.79656 7.056 0.0685592H11.664Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="p-3">
              <h2 className="text-2xl max-w-110 font-semibold mb-2 mt-3 transition-all duration-300 delay-100">
                {title}
              </h2>
              <p className="max-w-100 text-sm text-grayCustom transition-all duration-300 delay-150">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCard;
