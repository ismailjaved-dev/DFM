import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const page = () => {
  return (
    <section className=" w-full overflow-hidden relative">
      <div className="fluid-container pt-[10rem] md:pt-[14rem] lg:pt-[10rem] pb-[5rem] sm:pb-[10rem] relative grid items-center p-5 isolate">
        <div className="before:max-w-[31.25rem] before:max-h-[31.25rem] relative before:bg-[#9747FF] before:opacity-20 before:blur-[100px] before:rounded-[100px] before:translate-x-[-50%] before:translate-y-[-20%] before:top-[50%] before:left-[50%] before:absolute before:block before:h-[25rem] before:w-full before:z-[-1]"></div>
        <div className="flex flex-col gap-5 max-w-[53.7rem] m-auto">
           <div className='mx-auto hidden md:block'>
           <Image src={'/regulationHero.svg'} width={500} height={500} alt=''/>
           </div>
          <h1 className="text-h3 sm:text-h2 md:text-h1 leading-[130%] text-center">
          Regulatory Information
          </h1>
          <p className="text-white/30 text-center lg:px-1">
          iSAM Securities provides multi asset execution, prime brokerage and risk consultancy services to institutional clients globally. “iSAM Securities” is comprised of the following companies:
          </p>
         

        </div>
      </div>

 
   <div className='p-5'>
   <div className='fluid-container text-white/30 cardBg p-5 md:p-10 rounded-[15px]'>
      iSAM Securities (UK) Limited – which is authorised and regulated by the Financial Conduct Authority in the United Kingdom – no 629586
      <br/><br/> 
      iSAM Securities (HK) Limited – which is licensed by the Hong Kong Securities and Futures Commission to carry out Type 3 (Leveraged Foreign Exchange Trading) regulated activities under registration CE Number: BOL486
      <br/><br/>
       iSAM Securities (Global) Limited – which is registered with the Cayman Islands Monetary Authority as a registered person
       <br/><br/>
        iSAM Securities (USA) Inc. – which is registered with Commodity Futures Trading Commission as a commodity pool operator and a commodity trading advisor and is a member of the National Futures Association
      </div>
   </div>

   <div className='gradientLine'></div>

    </section>
  )
}

export default page