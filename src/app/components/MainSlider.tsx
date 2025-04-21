"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export const MainSlider =()=> {
  const sld1 : string = new URL(`../img/caleidoscopio.jpg`,import.meta.url).href
  const sld2 : string = new URL(`../img/pecadora.jpg`,import.meta.url).href
  const sld3 : string = new URL(`../img/coral1.jpg`,import.meta.url).href
  const sld4 : string = new URL(`../img/ilustracion.jpg`,import.meta.url).href
  const sld5 : string = new URL(`../img/coral2.jpg`,import.meta.url).href
  return (
    <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sld1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sld2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sld3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sld4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sld5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}