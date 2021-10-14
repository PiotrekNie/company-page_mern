import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/navbar";
import { ProductCategories } from "./productCategories";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    bg-white
    shadow-2xl
    px-3
    xl:px-0
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <ProductCategories />
    </PageContainer>
  );
}
