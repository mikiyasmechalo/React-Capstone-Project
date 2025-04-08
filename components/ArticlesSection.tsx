import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

interface ArticleCardProps {
  type: string[];
  title: string;
  description: string;
  image?: string;
  linkTo?: string;
}
const data = [
  {
    type: ["Perfect", "Tips"],
    title: "9 Popular Travel Destintion on Sale in 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "/article-images/article-1.png",
    linkTo: "/",
  },
  {
    type: ["Tips", "Travel"],
    title: "How are we going to travel in 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "/article-images/article-2.png",
    linkTo: "/",
  },
  {
    type: ["Stories", "Tips"],
    title: "Travel stories for now and the future",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "/article-img.png",
    linkTo: "/",
  },
];
const ArticlesSection = () => {
  const articles = data.slice(0, 3);
  return (
    <div className="items-center justify-center flex flex-col sm:px-20 px-5 gap-10">
      <div className="flex md:flex-row flex-col w-full lg:px-45 md:gap-7 gap-3 items-center justify-between">
        <div className="flex flex-col justify-between lg:gap-7">
          <h2 className="section-title">Tips and Articles</h2>
          <p className="text-grayCustom sm:text-lg md:leading-8 py-2 max-w-xl xs:text-base text-sm">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className=" xs:min-w-70 mx-auto md:mx-0 sm:min-w-50 min-w-full">
          <Button>View more</Button>
        </div>
      </div>
      <div className="items-center flex flex-col lg:flex-row gap-10">
        <div className="flex lg:flex-col md:flex-row flex-col gap-10 flex-grow">
          {articles[0] && <SmallArticleCard {...articles[0]} />}
          {articles[1] && <SmallArticleCard {...articles[1]} />}
        </div>
        <div className="mx-auto lg:m-0">
          {articles[2] && <LargeArticleCard {...articles[2]} />}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;

const SmallArticleCard = ({
  type,
  title,
  description,
  linkTo = "/",
}: ArticleCardProps) => {
  return (
    <div className="sm:p-6 p-4 sm:pb-11 pb-6 pr-4.5 max-w-[522px] drop-shadow-2xl bg-white flex flex-col">
  <p className="lg:text-2xl sm:text-xl text-lg lg:leading-18 leading-12 md:pt-3">
    {type.map((item, index) => `${item} ${index === 0 ? "| " : ""}`)}
  </p>

  <h3 className="lg:text-4xl sm:text-3xl text-xl lg:leading-12 font-medium">
    {title} <span className="block">-</span>
  </h3>

  <p className="text-[#343434] sm:text-lg md:leading-8 text-base font-light">
    {description}
  </p>

  <div className="flex mt-auto">
    <Link href={linkTo}>
      <Button className="text-2xl md:mt-18 sm:mt-10 mt-5">Read More</Button>
    </Link>
  </div>
</div>

  );
};

const LargeArticleCard = ({
  type,
  title,
  description,
  image = "/article-img.png",
  linkTo = "/",
}: ArticleCardProps) => {
  return (
    <div className="sm:pb-9 rounded-10  drop-shadow-2xl bg-white flex flex-col lg:max-w-[792px]">
      <Image
        src={image}
        alt={title}
        width={792}
        height={679}
        className="w-full  max-w-none object-cover"
      />

      <div className="sm:px-15 px-5 py-5 flex flex-col">
        <p className="lg:text-2xl sm:text-xl text-lg lg:leading-18 leading-12 ">
          {type.map((item, index) => `${item} ${index === 0 ? "| " : ""}`)}
        </p>
        <h3 className="md:text-4xl xs:text-3xl text-xl md:leading-12 font-medium">
          {title} <span className="block">-</span>
        </h3>
        <p className="text-[#343434] sm:text-lg md:leading-8 text-base font-light">
          {description}
        </p>
        <div className="flex">
          <Link href={linkTo}>
            <Button className="text-2xl sm:mt-10 mt-5">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
