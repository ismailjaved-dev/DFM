import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const page = () => {

  const data = [
    {title:"Disclosure (30 June 2023)",img:"/documentImg.svg"},
    {title:"S172 Statement",img:"/documentImg.svg"},
    {title:"iS Prime – Modern Slavery Statement",img:"/documentImg.svg"},
  ]

  return (
    <section className=" w-full overflow-hidden relative p-5">
      <div className="fluid-container pt-[10rem] md:pt-[14rem] lg:pt-[10rem] pb-[5rem] sm:pb-[10rem] relative grid items-center isolate">
        <div className="before:max-w-[31.25rem] before:max-h-[31.25rem] relative before:bg-[#9747FF] before:opacity-20 before:blur-[100px] before:rounded-[100px] before:translate-x-[-50%] before:translate-y-[-20%] before:top-[50%] before:left-[50%] before:absolute before:block before:h-[25rem] before:w-full before:z-[-1]"></div>
        <div className="flex flex-col gap-5 max-w-[53.7rem] m-auto">
           <div className='mx-auto hidden md:block'>
           <Image src={'/regulationHero.svg'} width={500} height={500} alt=''/>
           </div>
          <h1 className="text-h3 sm:text-h2 md:text-h1 leading-[130%] text-center">
          Regulatory Documents
          </h1>
          <p className="text-white/30 text-center lg:px-1">
          As of 1 December 2021, the Financial Conducts Authority confirmed that UK firms are no longer required to prepare RTS 28 reports. Historical reports can be requested by clients, if required.
          </p>
         

        </div>
      </div>

 
     <div className='fluid-container grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
       {
        data.map((res,index)=>{
          return <div className='cardBg p-5 lg:p-10 rounded-[15px] flex flex-col gap-5 items-center' key={index}>
            <Image src={res.img} width={200} height={200} alt='' className='!w-[90%] object-cover'/>
             <p className='text-center'>{res.title}</p>
          </div>
        })
       }
     </div>
 

   <div className='gradientLine'></div>

    </section>
  )
}

export default page