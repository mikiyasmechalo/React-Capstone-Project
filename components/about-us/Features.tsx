// components/Features.js
import Image from "next/image";

const features = [
  {
    name: "Great team work",
    icon: "/teamwork.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. ",
  },
  {
    name: "Our vision",
    icon: "/vision.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
  },
  {
    name: "Our mission",
    icon: "/mission.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-28 grid gap-8 md:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-8 md:px-16 lg:px-32">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="flex gap-4 md:gap-6 flex-col items-center justify-start"
        >
          <div className="flex items-center justify-center w-full text-center max-w-12 md:max-w-20 rounded-md text-white">
            <Image
              src={`${feature.icon}`}
              alt={feature.name}
              width={100}
              height={100}
              className="h-16 w-16 md:h-auto md:w-auto"
            />
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-6 text-gray-900 text-center">
            {feature.name}
          </p>
          <p className="text-sm md:text-base text-[#878787] text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
