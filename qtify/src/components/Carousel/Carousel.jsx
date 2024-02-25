/** @format */

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { Navigation } from "swiper/modules";

const Controls = ({ swiperRef }) => {
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [swiperRef]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <Controls swiperRef={swiperRef} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
