"use client"
import React from "react";
import { usePathname } from "next/navigation";

const CoreValuesSection = () => {
  const data = [
    {
      title: "Strive for Excellence",
      desc: "From the smallest detail to the bigger picture, we strive for excellence in everything we do.",
    },
    {
      title: "Strong Principles",
      desc: "Working with strong principles and values, we adhere to the highest standards.",
    },
    {
      title: "Trusted Partnership",
      desc: "Strong and lasting partnerships, built on quality and consistency, are the cornerstone of our success.",
    },
    {
      title: "Innovative Vision",
      desc: "We push ahead with innovative ideas, solutions and technology, to lead within the markets we operate.",
    },
  ];

  const pathname = usePathname().split("/")[1]

  return (
    <section className={`${pathname == 'about' && "bg-[#0B101D]"} relative isolate w-full grid xl:px-0 px-5`}>
      <div className="fluid-container relative">
        <div className="gradientLine relative z-[-1] my-16"></div>
        <div className="rounded-[30px] grid lg:grid-cols-2 gap-y-4 gap-x-12">
          <div className=" flex flex-col justify-between">
            <div className="lg:mb-0 mb-2">
              <p className="tag">What we stand for</p>
              <h2 className="text-h3 sm:text-h2 leading-[100%] mt-4">
                Our Core Values
              </h2>
            </div>
            <p className=" opacity-50">
              We believe that diversity and inclusion are the catalyst for
              success and innovation and welcome individuals with distinct
              personalities, goals, backgrounds and views. We have a proud
              tradition of attracting and retaining individuals who are smart,
              intuitive, hardworking, genuine and driven by a shared ambition to
              outperform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-[15px]">
            {data.map((res, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#fff]/5 p-[30px] rounded-[20px] border border-white/5"
                >
                  <div className="flex items-center gap-[15px] mb-[15px]">
                    <span className="bg-[#080C15CC] px-4 py-[6px] text-h3 rounded-[5px] border border-[#FFFFFF26] leading-none">
                      0{index + 1}
                    </span>
                    <p className="text-lg leading-none">{res.title}</p>
                  </div>
                  <p className=" text-sm text-white/50">{res.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="gradientLine relative z-[-1] my-16"></div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
