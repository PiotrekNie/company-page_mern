import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

interface ProductProps {
  color: string;
  img: {
    url: string;
    alt: string;
  };
  title: string;
  url: string;
  position?: {
    left?: number | undefined;
    bottom?: number | undefined;
  };
}

const ProductCategoryContainer = styled.div`
  ${tw`
    flex flex-col items-center relative mb-8
  `}

  a {
    ${tw`
    block text-xxs font-semibold tracking-widest uppercase mt-3 relative
  `}
    &:before {
      content: "";
      transform: scaleX(0) translateX(-50%);
      ${tw`
      block h-px bg-black w-full absolute left-1/2 -bottom-2 transition-transform origin-left ease-out duration-300
    `};
    }
    &:hover {
      &:before {
        transform: scaleX(1) translateX(-50%);
      }
    }
  }
`;

const ImageContainer = styled.div<{
  color: string;
  left: number | undefined;
  bottom: number | undefined;
}>`
  &:before {
    content: "";
    ${tw`
      md:w-80 md:h-80 rounded-full pointer-events-none block
    `}

    ${({ color }) =>
      color &&
      css`
        background-color: ${color};
      `}
  }
  img {
    ${tw`
      absolute -bottom-16 left-16 z-10 pointer-events-none max-w-none
    `}

    ${({ left }) =>
      left &&
      css`
        left: ${left ? left : 0}px;
      `}

    ${({ bottom }) =>
      bottom &&
      css`
        bottom: ${bottom ? bottom : -64}px;
      `}
  }
  ${tw` 
    relative mb-8 w-full md:pl-10
  `}
`;

export function ProductCategory(props: ProductProps) {
  return (
    <ProductCategoryContainer>
      <ImageContainer
        color={props.color}
        left={props.position?.left}
        bottom={props.position?.bottom}
      >
        <img src={props.img.url} alt={props.img.alt} />
      </ImageContainer>
      <h3>{props.title}</h3>
      <Link to={props.url} title={props.title}>
        SPRAWDŹ
      </Link>
    </ProductCategoryContainer>
  );
}
