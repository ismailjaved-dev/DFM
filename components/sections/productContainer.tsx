import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";
import Transition from "../ui/transition";
const ProductContainer = () => {
  const data = [
    {
      title: "Forex Brokers",
      desc: "We provide a unique end-to-end broker solution, combining liquidity / Prime of Prime services and advanced risk management/analytics.",
      icon: "/coinsIcon.svg",
    },
    {
      title: "Hedge Funds & Asset Managers",
      desc: "For clients with their own prime broker, we are able to set up trading via our agency hub, leveraging our unique liquidity and relationships to access Tier 1 interbank markets.",
      icon: "/StckedCoinsIcon.svg",
    },
    {
      title: "Proprietary Trading Houses & Family Offices",
      desc: "For proprietary Trading Houses and family offices we offer GUI and FIX API trading via our institutional grade execution platforms.",
      icon: "/buildingIcon.svg",
    },
    {
      title: "Banks & Corporates",
      desc: "Spot FX and forward execution, including NDFs. Full integration with vendor and proprietary execution and order management systems.",
      icon: "/bankIcon.svg",
    },
  ];

  return (
    <section className="max-w-fluid p-5 lg:pt-[6rem] relative isolate overflow-hidden">
      <div className="border_lines -z-10 opacity-5">
        <div />
      </div>
      {/* <Image src={'/roundedBorder.svg'} width={200} height={200} alt=''/> */}
      <div className="flex flex-col items-center gap-5 ">
        <p className="tag">Solutions</p>
        <Transition>
          <h1 className="text-h3 sm:text-h2 lg:text-h1 leading-[100%]">
            Our Products
          </h1>
        </Transition>
        <Transition>
          <p className="max-w-[35.875rem] text-center text-h6">
            We give you the expertise and tools to access unique liquidity and
            manage risk across your operations.
          </p>
        </Transition>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 my-10">
        {data.map((res, index) => {
          return (
            <div
              key={index}
              className="cardBg p-[1.875rem] rounded-2xl flex flex-col gap-4 justify-between"
            >
              <div>
                <Image src={res.icon} width={24} height={24} alt="" />
                <p className="text-lg my-3 leading-[100%]">{res.title}</p>
                <p className="text-sm text-white/50">{res.desc}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Learn More</p>
                <ChevronRight size={16} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <p className="text-white/50 text-center max-w-[36.125rem]">
          Fully customisable pricing sourced from Tier 1 banks, brokers and
          hedge funds that delivers unique, robust liquidity across 100+ pairs,
          as well as access to non-FX products including indices and
          commodities.
        </p>
      </div>

      <div className="gradientLine"></div>
    </section>
  );
};

export default ProductContainer;
