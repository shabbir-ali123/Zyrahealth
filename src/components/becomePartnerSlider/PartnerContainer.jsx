import React from 'react'
import PartnerSlider from './PartnerSlider'
import TestimonialSection from './PartnerSlider'
import TestSlider from './TestSlider'

const PartnerContainer = () => {
  return (
    <div className='pt-[30px]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[64px] font-semibold font-poppins'>
            Grow your business
            </h1>
            <p className='text-[24px] font-medium text-[#5E5E6F] text-center'>
            Join our network to help millions of seniors to age <br /> at home in good health and comfort
            </p>
            <button className='bg-black text-white py-4 px-[70px] rounded-full cursor-pointer mt-[30px]'>Start today</button>
        </div>
        <div>
            <TestSlider />
        </div>
    </div>
  )
}

export default PartnerContainer
