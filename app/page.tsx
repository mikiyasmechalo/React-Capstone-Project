import ExploreFilter from "@/components/ExploreFilter";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ExploreScrollbar from "@/components/ExplorerScrollBar";
import PartnerSection from "@/components/PartnerSection";
import TestimonialSection from "@/components/TestimonialSection";
export const whyChooseUsData = [
  {
    title: "Best Service",
    description:
      "our service is reliable and convenient, our service is quality.",
    linkTo: "/",
    imgSrc: "/people.png",
  },
  {
    title: "Price Guarentee",
    description:
      "our service is reliable and convenient, our service is quality.",
    linkTo: "/",
    imgSrc: "/dollar-sign.png",
  },
  {
    title: "Handpicked Hotels",
    description:
      "our service is reliable and convenient, our service is quality.",
    linkTo: "/",
    imgSrc: "/trophy.png",
  },
  {
    title: "Affordable Prices",
    description:
      "our services are budget-friendly without compromising on quality.",
    linkTo: "/",
    imgSrc: "/people.png",
  },
  {
    title: "Secure Services",
    description:
      "we prioritize your safety and ensure data protection at all times.",
    linkTo: "/",
    imgSrc: "/dollar-sign.png",
  },
];

const cards = [
  {
    nowViewing: false,
    title: "Bali, Indonesia",
    imageSrc: "/rectangle-img.png",
    description:
      "Bali is a beautiful tourist spot and is visited by many travelers.",
  },
  {
    nowViewing: false,
    title: "New York City",
    imageSrc: "/rectangle-img.png",
    description: "New York City is a vibrant and bustling metropolis.",
  },
  {
    nowViewing: false,
    title: "Paris, France",
    imageSrc: "/rectangle-img.png",
    description:
      "Paris is known for its romantic atmosphere and iconic landmarks.",
  },
  {
    nowViewing: false,
    title: "Ju Ne Se",
    imageSrc: "/rectangle-img.png",
    description:
      "Paris is known for its romantic atmosphere and iconic landmarks.",
  },
  {
    nowViewing: false,
    title: "France",
    imageSrc: "/rectangle-img.png",
    description:
      "Paris is known for its romantic atmosphere and iconic landmarks.",
  },
  // Add more cards as needed
];

export default function Home() {
  return (
    <div>
      <main className="relative">
        <div
          className={`bg-cover bg-center bg-no-repeat hidden md:block lg:min-h-[1060px] min-h-200`}
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
          <div className="sm:mx-auto flex sm:w-auto">
            <ExploreFilter />
          </div>

          <p className="text-[#CFCFCF] md:text-shadow-black/30 md:text-shadow-sm text-lg py-5 max-w-[440px] leading-9 my-4 hidden md:block">
            Popular Place : Bali, Istanbul, Rome, Paris.
          </p>
        </div>
      </main>
      <section>
        <ExploreScrollbar cards={cards} />
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
