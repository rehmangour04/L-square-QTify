/** @format */

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
const Controls = ({ data, swiperRef }) => {
  const swiper = swiperRef.current;

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [data, swiper]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          initialSlide={0}
          modules={{ Navigation }}
          slidesPerView={"auto"}
          spaceBetween={40}
          allowTouchMove
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <Controls data={data} swiperRef={swiperRef} />
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
          {data.map((item, index) => (
            <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
