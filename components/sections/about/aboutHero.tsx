"use client";
import React from "react";
import { Button } from "../../ui/button";

const AboutHero = () => {
  return (
    // <section className="bg-[#0B101D] w-full overflow-hidden relative lg:before:hidden before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:inset-0 before:absolute before:block">
    <section className="bg-[#0B101D] w-full overflow-hidden relative">
      <div className="fluid-container pt-[10rem] md:pt-[15rem] lg:pt-[14rem] pb-[5rem] sm:pb-[10rem] relative grid items-center p-5 isolate">
        <div className="before:max-w-[31.25rem] before:max-h-[31.25rem] relative before:bg-[#9747FF] before:opacity-20 before:blur-[100px] before:rounded-[100px] before:translate-x-[-50%] before:translate-y-[-20%] before:top-[50%] before:left-[50%] before:absolute before:block before:h-[25rem] before:w-full before:z-[-1]"></div>
        <div className="flex flex-col gap-5 max-w-[53.7rem] m-auto">
          <h3 className="sm:text-h1 text-[34px] leading-[130%] text-center">
            Industry-leading transparency and risk management.
          </h3>
          <p className="text-white/30 text-center lg:px-1">
            In today’s complex market environment, transactional transparency is
            an increasingly important part of execution performance and iSAM
            Securities is focused on providing industry-leading transparency,
            risk management and the highest quality liquidity for our clients.
          </p>
          <p className="text-white/30 text-center lg:px-2">
            Delivering excellence is ultimately a relationship business and we
            do this by combining the strength of our team with a truly
            differentiated suite of technology-enabled solutions and leveraging
            our heritage of systematic and quantitative trading intelligence and
            insight.
          </p>
          <div className="flex gap-3 justify-center mt-6 sm:flex-row flex-col">
            <Button variant="outline">Learn More</Button>
            <Button variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
