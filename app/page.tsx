import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import { Poppins } from "./layout";
import ExploreFilter from "@/components/ExploreFilter";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div
          className={`bg-cover bg-center bg-no-repeat hidden md:block min-h-screen`}
          style={{ backgroundImage: "url('./hero-image.png')" }}
        ></div>
        <div
          className={`bg-cover bg-center bg-no-repeat md:hidden min-h-screen`}
          style={{ backgroundImage: 'url("./hero-2.jpg")' }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 lg:mx-45 lg:my-40 md:m-20 flex flex-col justify-center gap-10 mt-10">
          <h1
            className={`lg:text-8xl md:text-5xl font-bold md:text-white text-center md:text-left text-3xl `}
          >
            Make in
            <span className="block">your journey.</span>
          </h1>
          <p className="text-[#CFCFCF] text-lg py-5 max-w-[440px] leading-9 my-4 hidden md:block">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="flex mx-auto md:mx-0">
            <ExploreFilter />
          </div>

          <p className="text-[#CFCFCF] text-lg py-5 max-w-[440px] leading-9 my-4 hidden md:block">
            Popular Place : Bali, Istanbul, Rome, Paris.
          </p>
        </div>
      </div>
      <WhyChooseUsCard />
    </div>
  );
}
