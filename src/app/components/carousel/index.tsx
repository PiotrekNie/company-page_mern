import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { FluidType } from "../../components/fluidTypes";
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import tw from "twin.macro";

// STYLES
import styles from "./styles.module.scss";

// IMAGES
import Image1 from "../../assets/images/Caro.png";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperContainer = styled.div`
  ${tw`
    container
  `}
`;

const Category = styled.div`
  ${tw`
    text-gray-600 block tracking-widest uppercase font-bold text-xxs
  `}
`;

const Title = styled.h2`
  ${tw`
    font-serif mb-5
  `}
  ${FluidType(5, 33, 62, "vw", "font-size", 600, 800)}
`;

const Paragraph = styled.p`
  ${tw`
    font-light mb-5
  `}
`;

const TextContainer = styled.div<{ color: string }>`
  ${tw`
  flex items-center md:col-span-4 pl-4
`}
  a {
    &:before {
      ${({ color }) => "green" && tw`bg-green-500`}
    }
  }
`;

const ImageContainer = styled.div<{ color: string }>`
  ${tw`
    relative z-10 pt-14
  `}
  &:before {
    content: "";
    width: 450px;
    height: 450px;
    ${tw`
      block rounded-full top-0 right-16 -z-10 absolute
    `}
    ${({ color }) => "green" && tw`bg-green-500`}
  }
`;

export function SectionCarousel() {
  return (
    <div className={styles.SliderWrapper}>
      <SwiperContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="grid md:grid-cols-12">
            <TextContainer color="green">
              <div>
                <Category>Łóżko</Category>
                <Title>Caro</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </Paragraph>
                <Link className="cta" to="/">
                  SPRAWDŹ
                </Link>
              </div>
            </TextContainer>
            <ImageContainer
              color="green"
              className="flex items-center col-span-8"
            >
              <img src={Image1} alt="Łóżko Caro" />
            </ImageContainer>
          </SwiperSlide>
          <SwiperSlide className="grid md:grid-cols-12">
            <TextContainer color="green">
              <div>
                <Category>Łóżko</Category>
                <Title>Caro</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </Paragraph>
                <Link className="cta" to="/">
                  SPRAWDŹ
                </Link>
              </div>
            </TextContainer>
            <ImageContainer
              color="green"
              className="flex items-center col-span-8"
            >
              <img src={Image1} alt="Łóżko Caro" />
            </ImageContainer>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
}
