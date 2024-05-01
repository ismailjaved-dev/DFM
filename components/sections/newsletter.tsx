import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section className='max-w-fluid w-full p-5 mt-10 mb-20'>
        <p className='tag'>Insight</p>
        <h2 className='text-h3 sm:text-h2 leading-[130%]'>Leading insight</h2>
        <h6 className='mt-4 sm:mt-2 text-[1.25rem] sm:text-h6 leading-[130%]'>Explore the latest industry trends and business updates.</h6>

          <div className='my-12'>
          <div className='max-w-[26.0625rem] my-4 relative'>
          <Input placeholder='Email'/>
          <Image src={'/arrowIcon.svg'} width={62} height={62} className='absolute top-[-3px] right-[-3px]' alt=''/>
          </div>
           
          </div>
         <p className='text-[0.625rem] text-white/50'>
         DFM is committed to protecting and respecting your privacy. We need permission to contact you regarding your message above and from time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.  You can unsubscribe from these communications at any time. For more information on our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy. By clicking submit below, you consent to allow DFM to store and process the personal information submitted above to provide you the content requested.
         </p>

    </section>
  )
}

export default Newsletter