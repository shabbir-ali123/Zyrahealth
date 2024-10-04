import React from 'react'
import person from '../../../public/images/Rectangle113.png'
import BusinessSlider from '../businessSlider/BusinessSlider'

const BusinessResults = () => {
  return (
    <>
    <div className='py-[80px]'>
        <div className='flex flex-col items-center gap-3'>
        <h1 className='text-4xl font-semibold text-center'>Trusted by providers, proven by results</h1>
        <div className='w-[100px] border border-black h-[2px]'></div>
        </div>
        <div className='pt-[53px] flex'>
                <img src={person} alt="" />
            {/* slider */}
            <div className='slider'>
                <BusinessSlider/>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default BusinessResults
