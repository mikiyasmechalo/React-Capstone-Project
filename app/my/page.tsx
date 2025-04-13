import ExploreFilter from "@/components/home/ExploreFilter";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ExploreScrollbar from "@/components/home/ExplorerScrollBar";
import PartnerSection from "@/components/home/PartnerSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { whyChooseUsData } from "@/data/my-why-choose-us";
import { ExploreCardData } from "@/data/my-explore-cards-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-20 md:gap-15 gap-5">
      <main className="relative">
        <div className="bg-cover bg-center bg-no-repeat hidden md:block lg:min-h-[1160px] min-h-200">
          <Image
            src="/hero-image.png"
            alt="Blog Cover"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="bg-cover bg-center bg-no-repeat md:hidden min-h-140">
          <Image
            src="/hero-2.jpg"
            alt="Blog Cover"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div
          className="absolute top-0 left-0 z-10 lg:mx-50 lg:mt-90 h-fit
          md:m-25 md:mt-50 flex flex-col justify-center gap-10 mt-30 inset-0"
        >
          <h1
            className={`lg:text-8xl md:text-5xl md:text-shadow-black/30 md:text-shadow-lg font-bold md:text-white text-gray-100 text-center md:text-left text-4xl `}
          >
            Make in
            <span className="block md:mt-5">your journey.</span>
          </h1>
          <p className="text-gray-200 md:text-shadow-black/50 md:text-shadow-lg text-lg py-5 max-w-[440px] leading-9 my-3 hidden md:block">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="sm:mx-auto md:mx-0 lg:mb-5 flex sm:w-auto">
            <ExploreFilter />
          </div>

          <p className="text-gray-200 md:text-shadow-sm font-semibold text-lg py-5 max-w-[440px] leading-9 my-2 hidden md:block">
            <span className="text-[#ECECEC]">Popular Place :</span> Bali,
            Istanbul, Rome, Paris.
          </p>
        </div>
      </main>
      <section>
        <ExploreScrollbar cards={ExploreCardData} />
      </section>
      <section>
        <WhyChooseUsSection items={whyChooseUsData} />
      </section>
      <section>
        <PartnerSection />
      </section>
      <section>
        <TestimonialSection />
      </section>
    </div>
  );
}
