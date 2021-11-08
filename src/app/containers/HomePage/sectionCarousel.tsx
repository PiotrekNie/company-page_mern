import React from "react";
import styled from "styled-components";
// Import Swiper React components
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import tw from "twin.macro";

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperContainer = styled.div`
  ${tw`
    container
  `}
`;

export function SectionCarousel() {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
