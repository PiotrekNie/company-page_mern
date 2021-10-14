import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

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
      absolute -bottom-16 left-0 z-10 pointer-events-none max-w-none
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
    relative mb-8 w-full
  `}
`;

const ProductCategoryLink = styled.a`
  ${tw`
    block text-xs font-bold tracking-widest uppercase mt-4 hover:underline
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
      <ProductCategoryLink href={props.url} title={props.title}>
        SPRAWDŹ
      </ProductCategoryLink>
    </ProductCategoryContainer>
  );
}
