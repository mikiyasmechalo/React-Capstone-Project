import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import Image from "next/image";
import RecentPosts from "@/components/RecentsContainer";
import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Link from "next/link";
import CommentForm from "@/components/CommentForm";
import { notFound } from "next/navigation";
import { blogs } from "@/data/my-blogs";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    notFound();
  }
  const { title, author, date, tags, sections, coverImg } = blog;

  return (
    <div className="flex flex-col md:gap-35 gap-10">
      <main className="relative ">
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:min-h-[1160px] md:min-h-[600px] sm:min-h-[400px] min-h-[300px]" // Added responsive height classes
        >
          <Image
            src={coverImg}
            alt="Blog Cover"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div
          className="absolute top-0 left-0 z-10 text-center lg:my-100 h-fit
          md:mt-60 flex flex-col m-auto items-center justify-center gap-10 mt-30 inset-0 max-w-3xl"
        >
          <h1
            className={`lg:text-6xl md:text-4xl font-bold text-white  text-center sm:text-3xl text-2xl `}
          >
            {title}
          </h1>
          <div className="flex flex-col md:flex-row sm:text-2xl lg:text-nowrap xs:text-xl text-lg sm:gap-14 gap-5 text-white">
            <div className="flex items-center gap-3">
              <BsFillPersonFill className="" />
              <p>{author}</p>
            </div>
            <div className="flex items-center gap-3">
              <BiCalendar />
              <p>{date}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegFolderOpen />
              <p>{tags.join(", ")}</p>
            </div>
          </div>
        </div>
      </main>

      <main className="flex flex-col lg:flex-row mx-auto gap-16 px-5 max-w-svw">
        <section className="flex flex-col sm:gap-7 gap-4 sm:text-lg sm:leading-8 xs:text-lg max-w-[812px] text-gray-975 font-light">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col sm:gap-7 gap-4 sm:text-lg sm:leading-8 xs:text-lg max-w-[812px] text-gray-975 font-light"
            >
              {section.title && (
                <h2 className="sm:text-4xl text-2xl sm:leading-13 font-medium">
                  {section.title}
                </h2>
              )}
              <p>{section.content}</p>
              {section.image && (
                <Image
                  src={section.image}
                  alt=""
                  width={812}
                  height={703}
                  className="rounded-lg"
                />
              )}
            </div>
          ))}
          <div className="sm:py-10 py-3 text-lg flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center">
            <p className="font-light">
              Tags: <span className="font-medium">{tags.join(", ")}</span>
            </p>
            <p className="font-light flex gap-5">
              Share This:
              <Link href={"#"}>
                <FacebookIconCircle />
              </Link>
              <Link href={"#"}>
                <TwitterIconCircle />
              </Link>
              <Link href={"#"}>
                <LinkedinIconCircle />
              </Link>
            </p>
          </div>
          <CommentForm />
        </section>
        <section className="flex flex-col items-center lg:gap-16 gap-5">
          <RecentPosts />
          <Categories />
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default page;

const FacebookIconCircle = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.0002 12.5781C25.0002 5.63125 19.4033 0 12.5002 0C5.59394 0.0015625 -0.00292969 5.63125 -0.00292969 12.5797C-0.00292969 18.8563 4.56894 24.0594 10.5439 25.0031V16.2141H7.37207V12.5797H10.5471V9.80625C10.5471 6.65469 12.4143 4.91406 15.2689 4.91406C16.6377 4.91406 18.0674 5.15938 18.0674 5.15938V8.25313H16.4908C14.9393 8.25313 14.4549 9.22344 14.4549 10.2188V12.5781H17.9205L17.3674 16.2125H14.4533V25.0016C20.4283 24.0578 25.0002 18.8547 25.0002 12.5781Z"
        fill="black"
      />
    </svg>
  );
};
const TwitterIconCircle = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6875 0C5.68106 0 0 5.68106 0 12.6875C0 19.6939 5.68106 25.375 12.6875 25.375C19.6939 25.375 25.375 19.6939 25.375 12.6875C25.375 5.68106 19.6939 0 12.6875 0ZM18.7849 9.56377C18.7934 9.69688 18.7934 9.83564 18.7934 9.97158C18.7934 14.129 15.6271 18.918 9.84131 18.918C8.05713 18.918 6.40322 18.3997 5.00986 17.5076C5.26475 17.5359 5.5083 17.5473 5.76885 17.5473C7.2415 17.5473 8.59521 17.0488 9.67422 16.2049C8.29219 16.1766 7.13105 15.2703 6.73457 14.0242C7.21885 14.095 7.65498 14.095 8.15342 13.9676C7.4418 13.823 6.80219 13.4365 6.34323 12.8738C5.88427 12.3111 5.63429 11.6068 5.63574 10.8807V10.841C6.05205 11.0761 6.54199 11.2205 7.05459 11.2403C6.62367 10.9531 6.27028 10.5641 6.02574 10.1076C5.78121 9.65114 5.65308 9.14138 5.65273 8.62354C5.65273 8.0373 5.80566 7.50205 6.08037 7.0376C6.87023 8.00994 7.85586 8.80519 8.97319 9.37166C10.0905 9.93813 11.3146 10.2632 12.5657 10.3256C12.1211 8.1874 13.7184 6.45703 15.6385 6.45703C16.5447 6.45703 17.3604 6.83652 17.9353 7.44824C18.6461 7.31514 19.3258 7.04893 19.9318 6.69209C19.6968 7.41992 19.204 8.03447 18.5498 8.42246C19.1842 8.35449 19.7959 8.17891 20.3623 7.93252C19.9347 8.56123 19.3994 9.11914 18.7849 9.56377Z"
        fill="black"
      />
    </svg>
  );
};

const LinkedinIconCircle = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM10.5729 19.8027H7.73792V10.6794H10.5729V19.8027ZM9.13792 9.55937C8.2425 9.55937 7.66354 8.925 7.66354 8.14042C7.66354 7.33979 8.26 6.72437 9.17437 6.72437C10.0887 6.72437 10.6487 7.33979 10.6662 8.14042C10.6662 8.925 10.0887 9.55937 9.13792 9.55937ZM20.9271 19.8027H18.0921V14.7467C18.0921 13.5698 17.6808 12.7706 16.6556 12.7706C15.8725 12.7706 15.4073 13.3117 15.2017 13.8323C15.1258 14.0175 15.1069 14.28 15.1069 14.541V19.8012H12.2704V13.5888C12.2704 12.4498 12.234 11.4975 12.196 10.6779H14.6592L14.789 11.9452H14.8458C15.2192 11.3502 16.1335 10.4723 17.6633 10.4723C19.5285 10.4723 20.9271 11.7221 20.9271 14.4083V19.8027Z"
        fill="black"
      />
    </svg>
  );
};
