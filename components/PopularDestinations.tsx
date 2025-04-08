import Image from "next/image";
import React from "react";
import { Rating } from "./TestimonialSection";
import Link from "next/link";
import Button from "./Button";

interface DestinationCardProps {
  country: string;
  price: number;
  description: string;
  image: string;
  linkTo: string;
  rating: number;
  forDays: number;
}
const destinations = [
  {
    title: "Paris",
    price: 329,
    description:
      "Experience the charm of the City of Lights, where romance, art, and gastronomy come alive under the iconic Eiffel Tower.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 4.8,
    forDays: 3,
  },
  {
    title: "Rome",
    price: 399,
    description:
      "Discover the Eternal City and immerse yourself in history, art, and culture. A journey through ancient ruins and vibrant streets awaits.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 5,
    forDays: 3,
  },
  {
    title: "Tokyo",
    price: 499,
    description:
      "Dive into the mesmerizing blend of tradition and modernity in Tokyo. Temples, technology, and culinary delights are just the start.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 4.5,
    forDays: 4,
  },
  {
    title: "Cairo",
    price: 349,
    description:
      "Explore the mysteries of the pyramids and the wonders of the Nile in the captivating city of Cairo.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 4,
    forDays: 3,
  },
  {
    title: "New York",
    price: 599,
    description:
      "The city that never sleeps offers dazzling lights, endless entertainment, and unforgettable experiences.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 4.7,
    forDays: 5,
  },
  {
    title: "Sydney",
    price: 439,
    description:
      "Journey to the stunning harbor city of Sydney, featuring the iconic Opera House, breathtaking beaches, and vibrant culture.",
    image: "/destination-images/paris.png",
    linkTo: "/about-us",
    rating: 4.6,
    forDays: 3,
  },
];

const PopularDestinations = async () => {
  const data = await fetch(
    "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
  ).then<DestinationCardProps[]>((res) => res.json());

  return (
    <div className="flex flex-col sm:gap-10 gap-8 md:p-20 p-5">
      <div className="flex flex-col">
        <h2 className="section-title">
          Popular Destinations
        </h2>
        <div className="flex sm:flex-row flex-col justify-between sm:gap-10 md:gap-30 gap-3">
          <p className="text-grayCustom sm:text-lg  py-2 max-w-xl xs:text-base text-sm">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className="sm:pt-5 xs:min-w-70 mx-auto md:mx-0 sm:min-w-fit min-w-full">
            <Button>Discover more</Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((destination) => (
          <div className="flex justify-center h-full">
            <DestinationCard
              key={destination.title}
              country={destination.title}
              price={destination.price}
              description={destination.description}
              image={destination.image}
              linkTo={destination.linkTo}
              rating={destination.rating}
              forDays={destination.forDays}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;

export const DestinationCard = ({
  country: title,
  price,
  description,
  image,
  linkTo,
  rating,
  forDays,
}: DestinationCardProps) => {
  return (
    <div className="flex flex-col max-w-[444px] h-full">
      <div className="">
        <Image
          src={image}
          alt={`${title} image`}
          width={444}
          height={100}
          objectFit="cover"
        />
      </div>
      <div
        className="flex flex-col md:gap-10 gap-5 justify-between sm:pr-8 sm:pl-6 sm:pt-9 
                sm:pb-7 p-4 bg-white shadow-xl rounded-[10px] flex-grow"
      >
        <div className="flex flex-col md:gap-7 gap-3">
          <div className="flex justify-between items-center">
            <h3 className="sm:text-2xl text-lg xs:text-xl font-semibold">
              {title}
            </h3>
            <p className="md:text-3xl text-lg xs:text-2xl font-light">
              <span className="font-normal">${price}</span>/{forDays}days
            </p>
          </div>
          <p className="text-sm text-[#555555] sm:leading-7">{description}</p>
        </div>
        <div className="flex justify-between sm:flex-row flex-col gap-3 sm:gap-0">
          <div className="m-auto sm:m-0 flex items-center">
            <Rating rating={rating} />
          </div>
          <Link href={linkTo} className="text-sm font-semibold">
            <Button>Booking now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
