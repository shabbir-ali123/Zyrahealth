import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Install required Swiper modules

const TestimonialSlider = () => {
  useEffect(() => {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 1,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
      },
    });
    
    // Clean up function
    return () => {
      galleryThumbs.destroy(); // Destroy Swiper instance on component unmount
    };
  }, []);

  return (
    <section className="spacer">
      <div className="testimonial-section">
        <div className="testi-user-img">
          <Swiper
            className="gallery-thumbs"
            spaceBetween={10} // Adjust space between slides if needed
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
          >
            <SwiperSlide>
              <img className="u3" src="https://md-aqil.github.io/images/2091127763_1_1_1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u1" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u2" src="https://md-aqil.github.io/images/attractive-beautiful-beauty-1986684.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u4" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;