// import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
// import Newsletter from "@/components/sections/newsletter";
import ProductContainer from "@/components/sections/productContainer";
import ServiceCard from "@/components/sections/serviceCard";

export default function Home() {
  return (
    // <main className=" text-white flex flex-col items-center bg-[#080C15] min-h-[100dvh] overflow-x-hidden">
    <>
      <Hero />
      <ProductContainer />
      <ServiceCard />
      {/* <Newsletter />
      <Footer /> */}
    </>
    // </main>
  );
}
