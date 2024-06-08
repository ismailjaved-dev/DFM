"use client";
import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import Transition from "@/components/ui/transition";

const HomeHero = () => {
  return (
    <section className="bg-[#0B101D] w-full overflow-hidden relative">
      <div className="fluid-container pt-[10rem] md:pt-[15rem] lg:pt-[14rem] pb-[5rem] sm:pb-[14rem] relative grid items-center p-5 isolate">
        <div className="before:max-w-[31.25rem] before:max-h-[31.25rem] relative before:bg-[#9747FF] before:opacity-20 before:blur-[100px] before:rounded-[100px] before:translate-x-[-50%] before:translate-y-[-20%] before:top-[50%] before:left-[50%] before:absolute before:block before:h-[25rem] before:w-full before:z-[-1]"></div>
        <div className="flex flex-col gap-5 max-w-[53.7rem] m-auto">
          <Transition>
            <h3 className="sm:text-h1 text-[34px] leading-[130%] text-center">
              Liquidity, Technology and Risk Solutions for Global Markets.
            </h3>
          </Transition>
          <Transition>
            <p className="text-white/30 text-center lg:px-1">
              We provide world-class technology, customised liquidity solutions
              and comprehensive operational and risk management services to
              institutional clients across the globe.
            </p>
          </Transition>
          <div className="flex gap-3 justify-center mt-6 sm:flex-row flex-col">
            <Button variant="outline">Learn More</Button>
            <Button variant="secondary">Get In Touch</Button>
          </div>
        </div>
        <Image
          src="/ellipse.png"
          width={400}
          height={300}
          alt=""
          className="hidden sm:block absolute bottom-0 -translate-x-1/2 md:bottom-0 left-1/2"
        />
      </div>
    </section>
  );
};

export default HomeHero;
