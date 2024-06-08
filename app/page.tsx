import HomeHero from "@/components/sections/home/homeHero";
import ProductContainer from "@/components/sections/productContainer";
import ServiceCard from "@/components/sections/serviceCard";

export default function Home() {
  return (
    // <main className=" text-white flex flex-col items-center bg-[#080C15] min-h-[100dvh] overflow-x-hidden">
    <>
      {/* <Hero /> */}
      <HomeHero />
      <ProductContainer />
      <ServiceCard />
      {/* <Newsletter />
      <Footer /> */}
    </>
    // </main>
  );
}
