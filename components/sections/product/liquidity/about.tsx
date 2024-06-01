import React from 'react'

const About = () => {
  return (
    <section className='fluid-container px-5 py-10'>

      <div className='md:flex gap-10 '>
      <div className=' basis-[40%]'>
          <div className='border-b py-8'>
            <h4 className='text-h5 lg:text-h4 '>Forex</h4>
            <p>We work with many of the largest e-FX brokerage firms globally, providing solutions from pure liquidity through to full front-to back white label solutions and risk management services.</p>
          </div>
          <div className='py-8'>
            <h4 className='text-h5 lg:text-h4  text-white/30'>Indices / Commodities</h4>
            <p className='text-white/30'>Access the most popular instruments based on underlying index and commodity products via our proprietary Index Swap API.</p>
          </div>
         </div>
         <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex flex-col basis-[80%]">
          <div>
            <p className="tag">Forex</p>
            <h4 className="md:text-h4 text-[1.5rem]">Solution</h4>
          </div>
          <p className=" opacity-50">
          We give you the expertise and tools to access unique liquidity and manage risk across your operations.
          <br /><br />
           Fully customisable pricing sourced from Tier 1 banks, brokers and hedge funds, delivering unique, robust liquidity across 100+ pairs, as well as access to non-FX products including indices and commodities.
           <br/><br />
            Our quant teams are in regular contact with their peers at the major bank and non-bank liquidity providers to discuss all elements of the flow that is directed towards us. We believe that open and transparent dialogue of this nature is of paramount importance in ensuring we receive the best pricing available.
            <br /><br />
             By comparing our execution metrics on latency, aftermath and inception points with our providers we can confidently offer an aggregated pricing to our clients that has been uniquely designed for their business.
          </p>
        </div>


      </div>

    </section>
  )
}

export default About