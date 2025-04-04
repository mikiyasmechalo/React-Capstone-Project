import Categories from "@/components/Categories";
import ContactInfoGrid from "@/components/ContactGrid";
import ContactUs from "@/components/ContactUs";
import EmailSubmit from "@/components/EmailSubmit";
import CommentForm from "@/components/CommentForm";
import RecentPosts from "@/components/RecentsContainer";
import SendMessage from "@/components/SendMessage";
import React from "react";
import ExploreCard from "@/components/ExploreCard";
import ExploreScrollbar from "@/components/ExplorerScrollBar";

const page = () => {
  const cards = [
    {
      nowViewing: true,
      title: "Bali, Indonesia.",
      imageSrc: "/rectangle-img.png",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
    },
    {
      nowViewing: false,
      title: "Bali, Indonesia.",
      imageSrc: "/rectangle-img.png",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
    },
    {
      nowViewing: false,
      title: "Bali, Indonesia.",
      imageSrc: "/rectangle-img.png",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
    },
  ];
  return (
    <>
      <RecentPosts />
      <Categories />
      <ContactUs />
      <CommentForm />
      <div className="lg:flex lg:flex-row flex flex-col items-center justify-center">
        <div className="lg:order-first order-last w-full lg:w-1/2">
          <SendMessage />
        </div>
        <ContactInfoGrid />
      </div>
      <div className="flex">
        <ExploreScrollbar cards={cards} />
      </div>
    </>
  );
};

export default page;
