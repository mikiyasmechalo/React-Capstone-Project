import Image from "next/image";
import React from "react";
import { Rating } from "@/components/home/TestimonialSection";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { destinations } from "@/data/my-destinations-data";

export interface DestinationCardProps {
  id: string;
  country: string;
  price: string;
  description: string;
  image: string;
  linkTo: string;
  rating: number;
  forDays: number;
}
const PopularDestinations = async () => {
  const fetchedData = await fetch(
    "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
  ).then<DestinationCardProps[]>((res) => res.json());

  return (
    <div className="flex flex-col sm:gap-10 gap-8 md:p-20 p-5">
      <div className="flex flex-col">
        <h2 className="section-title">Popular Destinations</h2>
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
        {destinations.map((destination, index) => (
          <div className="flex justify-center h-full" key={destination.id}>
            <DestinationCard
              id={fetchedData[index].id}
              country={fetchedData[index].country}
              price={fetchedData[index].price}
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
    <Link href={linkTo} className="">
      <div className="flex flex-col max-w-[444px] h-full">
        <div className="">
          <Image
            src={image}
            alt={`${title} image`}
            width={444}
            height={319}
            className="object-center object-cover"
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
            <p className="text-sm text-gray-800 sm:leading-7">{description}</p>
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-3 sm:gap-0">
            <div className="m-auto sm:m-0 flex items-center">
              <Rating rating={rating} />
            </div>
            <Button size="sm">Booking now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
