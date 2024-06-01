import CoreValuesSection from '@/components/sections/about/coreValuesSection'
import About from '@/components/sections/product/technology/about'
import Hero from '@/components/sections/product/technology/hero'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
        <Hero />
        <About />
        <CoreValuesSection />
    </div>
  )
}

export default page