import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-[#080C15] isolate w-full overflow-hidden relative lg:before:hidden before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:top-[10%] before:left-[15%] before:absolute before:block before:h-[25rem] before:w-[50%]">
      <div className="fluid-container isolate pt-[10rem] md:pt-[15rem] pb-[3rem] sm:pb-[5rem] relative grid lg:grid-cols-2 gap-10 items-center p-5">
        <div className="hidden w-full lg:block relative before:bg-[#9747FF] before:-z-10 before:opacity-10 before:blur-[100px] before:rounded-[100px] before:left-[0rem] before:absolute before:block before:h-[25rem] before:w-full">
          <p className="tag md:mb-6">Contact Us</p>
          <h3 className="text-h2 leading-none">Let's Start the Conversation</h3>
        </div>
        <div className="grid col-span-full lg:grid-cols-2 md:gap-[20px] gap-3">
          <div>
            <div className="cardBg sm:p-[1.875rem] p-[1.25rem] rounded-2xl grid md:grid-cols-2 md:mb-[20px] mb-[12px] gap-[20px]">
              <div>
                <p className="text-lg">Support Email</p>
                <p className="text-sm leading-none opacity-[50%]">
                  help@dfm.com
                </p>
              </div>
              <div>
                <p className="text-lg">Career Email</p>
                <p className="text-sm leading-none opacity-[50%]">
                  work@dfm.com
                </p>
              </div>
              <div>
                <p className="text-lg">Phone</p>
                <p className="text-sm leading-none opacity-[50%]">
                  +1 (505) 929-2090
                </p>
              </div>
              <div>
                <p className="text-lg">Fax</p>
                <p className="text-sm leading-none opacity-[50%]">
                  +1 (505) 920-0020
                </p>
              </div>
            </div>
            <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl ">
              <p className="tag">Drop us a Line</p>
              <h4 className="text-h4">Let's Get Started!</h4>
              <p className="opacity-50 text-base font-normal">
                We're excited to hear from you and discuss how we can help with
                your project or answer any questions you may have.
              </p>
              <form className="flex flex-col gap-[10px] mt-[20px]" action="">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex w-full border border-[#FFFFFF26] bg-[#080C15CC] px-5 py-4 text-sm rounded-[0.625rem] placeholder:text-white/50 focus-visible:outline-none h-14"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex w-full border border-[#FFFFFF26] bg-[#080C15CC] px-5 py-4 text-sm rounded-[0.625rem] placeholder:text-white/50 focus-visible:outline-none h-14"
                />
                <textarea
                  placeholder="How can we help you?"
                  className="flex w-full border border-[#FFFFFF26] bg-[#080C15CC] px-5 py-4 resize-none text-sm rounded-[0.625rem] placeholder:text-white/50 focus-visible:outline-none h-14"
                />
                <Button className="w-fit mt-2" variant="secondary">
                  Get In Touch
                </Button>
              </form>
            </div>
          </div>
          <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex justify-center items-center h-[450px] lg:h-auto">
            <div className="relative">
              <Link
                href=""
                className=" w-20 h-20 grid place-items-center border-2 border-[#F8F8F81A] rounded-full absolute right-32 shadow_box p-5 bg-[#181A24]"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt="Linkedin Icon"
                  width="45"
                  height="45"
                />
              </Link>
              <Link
                href=""
                className=" w-20 h-20 grid place-items-center border-2 border-[#F8F8F81A] rounded-full absolute left-32 shadow_box p-5 bg-[#181A24]"
              >
                <Image
                  src="/fb-icon.svg"
                  alt="Linkedin Icon"
                  width="45"
                  height="45"
                />
              </Link>
              <Link
                href=""
                className=" w-20 h-20 grid place-items-center border-2 border-[#F8F8F81A] rounded-full absolute top-32 shadow_box p-5 bg-[#181A24]"
              >
                <Image
                  src="/instagram-icon.svg"
                  alt="Linkedin Icon"
                  width="45"
                  height="45"
                />
              </Link>
              <Link
                href=""
                className=" w-20 h-20 grid place-items-center border-2 border-[#F8F8F81A] rounded-full absolute bottom-32 shadow_box p-5 bg-[#181A24]"
              >
                <Image
                  src="/twitter-icon.svg"
                  alt="Linkedin Icon"
                  width="45"
                  height="45"
                />
              </Link>
              <div className="relative isolate">
                <div className="radial_bg after:hidden rotate-[-90deg] top-10 -z-10"></div>
                <Image
                  className="bg-[#151821] rounded-full"
                  src="/icon-container.svg"
                  alt="Icon Container"
                  width="86"
                  height="86"
                />
                <div className="radial_bg rotate-[90deg] bottom-10 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/starImg.png"}
        width={400}
        height={400}
        alt=""
        className="absolute top-[20%] right-0 bottom-10 max-w-[400px] max-h-[500px] -z-10"
      />
      <div className="gradientLine my-0 transition-all duration-500 " />
    </section>
  );
};

export default page;
