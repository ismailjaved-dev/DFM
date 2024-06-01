"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {

  return (
    <section className="bg-[#0B101D] w-full overflow-hidden relative lg:before:hidden before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:top-[10%] before:left-[15%] before:absolute before:block before:h-[25rem] before:w-[50%]">
      <div className="fluid-container pt-[10rem] md:pt-[15rem] lg:pt-[20rem] pb-[3rem] sm:pb-[5rem] relative grid lg:grid-cols-2 gap-10 items-center p-5">
   

        <div className="hidden w-full  lg:block relative before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:left-[-10rem] before:absolute before:block before:h-[25rem] before:w-full">
          <Image src='/liquidityHero.svg' width={700} height={700} alt=''/>

        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-h3 leading-[130%]">
          We give you the expertise and tools to access unique liquidity and manage risk across your operations.
          </h3>
          <p className="text-white/30">
          In today’s complex market environment, transactional transparency is an increasingly important part of execution performance and iSAM Securities is focused on providing industry-leading transparency, risk management and the highest quality liquidity for our clients.
          </p>
          <div className="flex gap-3">
            <Button variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
