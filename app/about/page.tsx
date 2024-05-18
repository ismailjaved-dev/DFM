import AboutHero from "@/components/sections/about/aboutHero";
import ApproachSection from "@/components/sections/about/approachSection";
import CoreValuesSection from "@/components/sections/about/coreValuesSection";
import React from "react";

const page = () => {
  return (
    // <main className="text-white flex flex-col items-center bg-[#080C15] min-h-[100dvh]">
    <>
      <AboutHero />
      <ApproachSection />
      <CoreValuesSection />
    </>
    // </main>
  );
};

export default page;
