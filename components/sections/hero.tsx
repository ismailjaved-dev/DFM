"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Hero = () => {
  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "140px",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    infinite: true,
    cssEase: "linear",

    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  };

  const data = [
    {
      title: "Perspective",
      desc: "We have built unique relationships with the wholesale FX markets, which means we can consistently offer the best pricing and execution.",
    },
    {
      title: "Experience",
      desc: "We hire the brightest minds in the market and empower them to innovate and proactively help our clients perform better.",
    },
    {
      title: "Technology",
      desc: "What sets us apart is our unrivalled investment in our proprietary technology and listening to and truly delivering for our clients.",
    },
    {
      title: "Perspective",
      desc: "We have built unique relationships with the wholesale FX markets, which means we can consistently offer the best pricing and execution.",
    },
    {
      title: "Experience",
      desc: "We hire the brightest minds in the market and empower them to innovate and proactively help our clients perform better.",
    },
    {
      title: "Technology",
      desc: "What sets us apart is our unrivalled investment in our proprietary technology and listening to and truly delivering for our clients.",
    },
  ];

  return (
    <section className="bg-[#0B101D] w-full overflow-hidden relative lg:before:hidden before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:top-[10%] before:left-[15%] before:absolute before:block before:h-[25rem] before:w-[50%]">
      <div className="fluid-container pt-[10rem] md:pt-[15rem] lg:pt-[20rem] pb-[5rem] sm:pb-[10rem] relative grid lg:grid-cols-2 gap-10 items-center p-5">
        <Image
          src="/ellipse.png"
          width={400}
          height={300}
          alt=""
          className="hidden sm:block absolute bottom-[-15px] md:bottom-0 right-[-7%] 2xl:right-[-10%]"
        />

        <div className="hidden w-full  lg:block relative before:bg-[#9747FF]  before:opacity-30 before:blur-[100px] before:rounded-[100px] before:left-[-10rem] before:absolute before:block before:h-[25rem] before:w-full">
          {/* <Image src='/animationImg.png' width={500} height={500} alt=''/> */}

          <Swiper
            direction={"vertical"}
            slidesPerView={2.9}
            spaceBetween={-10}
            loop={true}
            centeredSlides={true}
            speed={700}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper max-h-[22rem]"
          >
            {data.map((res, index) => {
              return (
                <SwiperSlide key={index} className="cardBg p-8 rounded-xl">
                  <p className="text-[18px] font-semibold">{res.title}</p>
                  <p className="text-sm text-white/30">{res.desc}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-h3 leading-[130%]">
            Liquidity, technology and risk solutions for global markets.
          </h3>
          <p className="text-white/30">
            We provide world-class technology, customised liquidity solutions
            and comprehensive operational and risk management services to
            institutional clients across the globe.
          </p>
          <div className="flex gap-3">
            <Button variant="outline">Learn More</Button>
            <Button variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <Slider {...settings}>
{
    data.map((res,index)=>{
        return(
            <div key={index} className='cardBg p-8 rounded-xl'>
                <p className='text-[18px] font-semibold'>{res.title}</p>
                <p className='text-sm text-white/30'>{res.desc}</p>
            </div>
        )
    })
}

</Slider> */
}
