import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
    { src: 'https://swiperjs.com/demos/images/nature-1.jpg', alt: 'person 1' },
    { src: 'https://swiperjs.com/demos/images/nature-2.jpg', alt: 'person 2' },
    { src: 'https://swiperjs.com/demos/images/nature-3.jpg', alt: 'person 3' },
    { src: 'https://swiperjs.com/demos/images/nature-4.jpg', alt: 'person 4' },
    { src: 'https://swiperjs.com/demos/images/nature-5.jpg', alt: 'person 5' },
  ];

const TestSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
        <div className=' w-full pt-7 h-[30vh]'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'5'}
            spaceBetween={50} // Increased gap between slides
            // spaceBetween={100} 
            coverflowEffect={{
                rotate: 1,
                stretch: 0,
                
                depth: 50,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="flex justify-between gap-10"
            // grey scale effect for active slide
            onSlideChange={handleSlideChange}
          >
 {images.map((image, index) => (
          <SwiperSlide key={index} className={`relative ${activeIndex === index ? 'z-10' : 'z-0'} w-[200px]`}>
            <img
              className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${
                activeIndex === index ? 'grayscale-0' : 'grayscale'
              }`}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
          </Swiper>
          </div>
        </>
      );
}

export default TestSlider
