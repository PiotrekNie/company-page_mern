import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

interface ProductGridProps {
  items: {
    image: { url: string; alt: string };
    category: { text: string; url: string; color: string };
    title: string;
    link: { url: string; text: string };
  }[];
}

const GridContainer = styled.div`
  ${tw`
    grid
  `}
`;

const ProductContainer = styled.div`
  ${tw`
    bg-white hover:shadow-lg px-4 py-7 text-center transition-shadow duration-300 ease-out
  `}
`;

const CategoryLink = styled(Link)<{ color: string }>`
  ${tw`
  text-yellow font-bold text-sm mb-3
  `}

  ${({ color }) => "yellow" && tw`text-yellow`}

  ${({ color }) => "blue" && tw`text-blue`}

  ${({ color }) => "red" && tw`text-blue`}

  ${({ color }) => "azure" && tw`text-azure`}
`;

export function ProductGrid(props: ProductGridProps) {
  return (
    <GridContainer>
      {props.items.map((item, index) => (
        <ProductContainer>
          <div className="mb-5 flex items-center justify-center overflow-hidden">
            <img src={item.image.url} alt={item.image.alt} />
          </div>
          <div className="flex flex-col items-center">
            <CategoryLink to={item.category.url} color={item.category.color}>
              {item.category.text}
            </CategoryLink>
            <h2 className="text-base font-light mb-8">{item.title}</h2>
            <Link
              to={item.link.url}
              className={`cta cta-${item.category.color}`}
            >
              {item.link.text}
            </Link>
          </div>
        </ProductContainer>
      ))}
    </GridContainer>
  );
}
