import ExploreFilter from "@/components/ExploreFilter";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ExploreScrollbar from "@/components/ExplorerScrollBar";
import PartnerSection from "@/components/PartnerSection";
import TestimonialSection from "@/components/TestimonialSection";
import { whyChooseUsData } from "@/data/my-why-choose-us";
import { ExploreCardData } from "@/data/my-explore-cards-data";

export default function Home() {
  return (
    <div>
      <main className="relative">
        <div
          className={`bg-cover bg-center bg-no-repeat hidden md:block lg:min-h-[1160px] min-h-200`}
          style={{ backgroundImage: "url('./hero-image.png')" }}
        ></div>
        <div
          className={`bg-cover bg-center bg-no-repeat md:hidden min-h-140`}
          style={{ backgroundImage: 'url("./hero-2.jpg")' }}
        ></div>
        <div
          className="absolute top-0 left-0 z-10 lg:mx-45 lg:my-75 h-fit
          md:m-25 md:mt-50 flex flex-col justify-center gap-10 mt-30 inset-0"
        >
          <h1
            className={`lg:text-8xl md:text-5xl md:text-shadow-black/30 md:text-shadow-lg font-bold md:text-white text-gray-800 text-center md:text-left text-3xl `}
          >
            Make in
            <span className="block md:mt-5">your journey.</span>
          </h1>
          <p className="text-[#CFCFCF] md:text-shadow-black/50 md:text-shadow-lg text-lg py-5 max-w-[440px] leading-9 my-3 hidden md:block">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="sm:mx-auto lg:mx-0 flex sm:w-auto">
            <ExploreFilter />
          </div>

          <p className="text-[#CFCFCF] md:text-shadow-black/30 md:text-shadow-sm text-lg py-5 max-w-[440px] leading-9 my-4 hidden md:block">
            Popular Place : Bali, Istanbul, Rome, Paris.
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
