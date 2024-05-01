import Image from "next/image";
import React from "react";

const ServiceCard = () => {

    const data = [
        {title:"Scale",desc:"Cutting-edge technology that enables complete flexibility in how we operate.",icon:"/scaleIcon.svg"},
        {title:"Technology",desc:"Cutting-edge technology that enables complete flexibility in how we operate.",icon:"/technologyIcon.svg"},
        {title:"Consistency",desc:"Delivering unrivalled consistency of flow, spreads, and customer service.",icon:"/consistencyIcon.svg"},
        {title:"Flexibility",desc:"Flexibility in price feeds and routing, delivers unparalleled consistency of flow and spreads.",icon:"/flexibilityIcon.svg"},
    ]

  return (
 <section className="relative w-full grid">
     <section className="fluid-container relative z-20 p-5 ">
      <div className="cardBg p-5 rounded-[30px] grid lg:grid-cols-2 gap-y-4">
        <div className=" sm:p-8 flex flex-col justify-between">
          <div>
          <p className="tag">Solutions</p>
          <h2 className="text-h3 sm:text-h2 leading-[100%] mt-4">
            Building a partnership on trust and quality.
          </h2>
          </div>
          <p className="mt-4 ">
            We are trusted by thousands of professionals and companies
            worldwide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-[0.9375rem] gap-y-[0.625rem]">
            {
                data.map((res,index)=>{
                    return(
                        <div key={index} className="bg-[#080C15]/80 p-10 rounded-[20px] outline outline-white/5 outline-1">
                            <Image src={res.icon} width={24} height={24} alt="title" />
                            <p className="text-lg mt-[1.875rem]">{res.title}</p>
                            <p className="text-sm text-white/50">{res.desc}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>

      <div className="gradientLine relative z-[-1]"></div>
      
    </section>
    <Image src={'/starImg.png'} fill alt="" className="starImg justify-self-end"/>
 </section>
  );
};

export default ServiceCard;
