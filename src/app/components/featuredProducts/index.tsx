import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import ProductImage from "../../assets/images/product_1.jpg";

interface ProductProps {
  image: { url: string; alt: string };
  category: string;
  title: string;
  link: string;
}

const products: ProductProps[] = [
  {
    image: {
      url: ProductImage,
      alt: "Łóżko",
    },
    category: "Łóżka",
    title: "Coral",
    link: "/",
  },
  {
    image: {
      url: ProductImage,
      alt: "Łóżko",
    },
    category: "Łóżka",
    title: "Coral",
    link: "/",
  },
  {
    image: {
      url: ProductImage,
      alt: "Łóżko",
    },
    category: "Łóżka",
    title: "Coral",
    link: "/",
  },
  {
    image: {
      url: ProductImage,
      alt: "Łóżko",
    },
    category: "Łóżka",
    title: "Coral",
    link: "/",
  },
];

const ProductColumn = styled.div`
  ${tw`
    bg-white transition-shadow duration-300 ease-out shadow-none hover:shadow-lg pb-12 pt-3
  `}
`;

const ProductColumnImage = styled.div`
  ${tw`
    flex items-center justify-center mb-5
  `}
`;

const ProductColumnText = styled.div`
  ${tw`
    text-center flex flex-col items-center
  `}
`;

const ProductGrid = styled.div`
  padding-left: 1px;
  padding-right: 1px;

  ${tw`
    grid md:grid-cols-4 sm:grid-cols-2 gap-x-4 mx-auto
  `}
`;

export function FeaturedProducts() {
  return (
    <section className="container pt-20">
      <div className="mb-16">
        <h2 className="h3">Nasze najpopularniejsze produkty</h2>
      </div>
      <ProductGrid>
        {products.map((product: ProductProps, index: number) => (
          <ProductColumn key={index}>
            <ProductColumnImage>
              <img src={product.image.url} alt={product.image.alt} />
            </ProductColumnImage>
            <ProductColumnText>
              <span className="text-xs block text-green font-medium mb-2">
                {product.category}
              </span>
              <span className="block mb-8 text-lg">{product.title}</span>
              <Link
                to={product.link}
                className="cta cta-green"
                title={product.title}
              >
                Sprawdź
              </Link>
            </ProductColumnText>
          </ProductColumn>
        ))}
      </ProductGrid>
    </section>
  );
}
