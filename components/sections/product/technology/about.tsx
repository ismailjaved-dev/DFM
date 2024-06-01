import React from 'react'

const About = () => {
  return (
    <section className='fluid-container px-5 py-10'>

      <div className='md:flex gap-10 '>
      <div className=' basis-[40%]'>
          <div className='border-b py-8'>
            <h4 className='text-h5 lg:text-h4 '>White Label</h4>
            <p>Using our white-label solutions can deliver a branded version to your clients quickly, effectively and at minimal cost.</p>
          </div>
          <div className='py-8'>
            <h4 className='text-h5 lg:text-h4  text-white/30'>MT5</h4>
            <p className='text-white/30'>Our technology is what drives our success, it is robust, reliable and sophisticated and designed to deliver the customised solutions our clients need.</p>
          </div>
         </div>
         <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex flex-col basis-[80%]">
          <div>
            <p className="tag">Forex</p>
            <h4 className="md:text-h4 text-[1.5rem]">Solution</h4>
          </div>
          <p className=" opacity-50">
          iSAM Securities provides white label solutions including MT4 and MT5, our proprietary Terminus back office and risk system and a full broker package from iS Risk Analytics including bridge services.
          <br/><br/>
           MT4 and MT5 are institutional multi-asset platforms offering enhanced trading functionality and technical analysis and Terminus provides monitoring of live trading, aggregate risk, margin requirements and access to historic and daily end-of-day snapshot data and reports.
          </p>
        </div>


      </div>

    </section>
  )
}

export default About