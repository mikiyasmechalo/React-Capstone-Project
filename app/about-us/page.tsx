import React from "react";
import About from "@/components/about-us/About";
import AboutGallery from "@/components/about-us/AboutGallery";
import AboutStats from "@/components/about-us/AboutStats";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import Features from "@/components/about-us/Features";

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <Features />
      <About />
      <AboutStats />
      <AboutGallery />
    </div>
  );
};

export default page;
