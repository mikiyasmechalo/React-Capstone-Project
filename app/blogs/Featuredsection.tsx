import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FeaturedSection = (): JSX.Element => {
  // Recent posts data
  const recentPosts = [
    {
      id: 1,
      title: "Travel Stories for Now and the Future",
      date: "14 Dec 2022",
      image: "/unsplash-1xlyzi17z2m-1.png",
    },
    {
      id: 2,
      title: "9 Popular Travel Destintion on Sale in 2022",
      date: "14 Dec 2022",
      image: "/unsplash-yui5vfkhuzs.png",
    },
    {
      id: 3,
      title: "How Are We Going to Travel in 2022?",
      date: "14 Dec 2022",
      image: "/unsplash-hpth5b6mo2s.png",
    },
  ];

  // Categories data
  const categories = [
    { id: 1, name: "Travel" },
    { id: 2, name: "Tips" },
    { id: 3, name: "Stories" },
    { id: 4, name: "Destination" },
  ];

  return (
    <section className="w-full max-w-[1372px] mx-auto py-12">
      <div className="flex flex-col lg:flex-row gap-14">
        {/* Main content column */}
        <div className="flex-1">
          {/* First article section */}
          <div className="mb-14">
            <img
              className="w-full h-auto max-h-[703px] object-cover rounded-md"
              alt="Unsplash"
              src="/unsplash-1xlyzi17z2m.png"
            />

            <p className="mt-8 font-['Poppins',Helvetica] font-light text-[#343434] text-lg leading-[33px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Second article section */}
          <div className="mb-14">
            <h2 className="font-['Poppins',Helvetica] font-medium text-black text-4xl leading-[51px] mb-6">
              Rice Terraces, Tegallalang
            </h2>

            <p className="font-['Poppins',Helvetica] font-light text-[#343434] text-lg leading-[33px] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            <img
              className="w-full h-auto max-h-[599px] object-cover rounded-md mb-8"
              alt="Unsplash kuwe"
              src="/unsplash-xbpg4k-kuwe.png"
            />

            <p className="font-['Poppins',Helvetica] font-light text-[#343434] text-lg leading-[33px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Article footer */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-4">
              <span className="font-['Poppins',Helvetica] font-light text-[#343434] text-lg leading-[33px]">
                Tags :
              </span>
              <span className="font-['Poppins',Helvetica] font-medium text-[#343434] text-lg leading-[33px]">
                Destintion, Travel
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-['Poppins',Helvetica] font-light text-black text-lg leading-[33px]">
                Share This :
              </span>
              <div className="flex items-center gap-3">
                <img
                  className="w-[25px] h-[25px]"
                  alt="Group"
                  src="/group-1.png"
                />
                <img
                  className="w-[25px] h-[25px]"
                  alt="Vector"
                  src="/vector-11.svg"
                />
                <img className="w-7 h-7" alt="Vector" src="/vector-8.svg" />
              </div>
            </div>
          </div>

          <Separator className="mt-6" />
        </div>

        {/* Sidebar column */}
        <div className="w-full lg:w-[502px] space-y-8">
          {/* Recent Posts Card */}
          <Card className="shadow-[0px_4px_20px_#0000001a] rounded-[10px]">
            <CardHeader>
              <CardTitle className="font-['Poppins',Helvetica] font-medium text-black text-4xl leading-[51px]">
                Recent Post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-6">
                    <img
                      className="w-[149px] h-[99px] object-cover"
                      alt="Recent post thumbnail"
                      src={post.image}
                    />
                    <div className="flex flex-col justify-between">
                      <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[27px]">
                        {post.title}
                      </h3>
                      <p className="font-['Poppins',Helvetica] font-light text-[#343434] text-lg leading-[33px]">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories Card */}
          <Card className="shadow-[0px_4px_20px_#0000001a] rounded-[10px]">
            <CardHeader>
              <CardTitle className="font-['Poppins',Helvetica] font-medium text-black text-4xl leading-[51px]">
                Catagories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <img
                      className="w-5 h-[15px]"
                      alt="Arrow"
                      src="/arrow-1.svg"
                    />
                    <span className="font-['Poppins',Helvetica] font-medium text-[#343434] text-lg leading-[33px]">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <Separator key={index} className="my-[30px]" />
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-black rounded-[10px] text-white">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[27px] leading-[70px]">
                    Have Any Question?
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-normal text-white text-lg leading-[22px]">
                    Do not hesitage to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Vector"
                    src="/vector-5.svg"
                  />
                  <span className="font-['Poppins',Helvetica] font-normal text-white text-lg leading-[22px]">
                    +62 6943 6956
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    className="w-[23px] h-[17px]"
                    alt="Group"
                    src="/group-74.png"
                  />
                  <span className="font-['Poppins',Helvetica] font-normal text-white text-lg leading-[22px]">
                    contact@domain.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
