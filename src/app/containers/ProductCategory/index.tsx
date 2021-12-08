import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

// Images
import Image from "../../assets/images/matress.png";
import { Sidebar } from "../../components/category-sidebar";

interface Category {
  color: string;
  title: string;
}

const Main = styled.main`
  ${tw`
    w-full
  `}
  p {
    ${tw`
       leading-relaxed
    `}
  }
`;

const CategoryKv = styled.div<{ color: string }>`
  ${tw`
    container
    flex justify-center items-center
    relative
  `};

  ${({ color }) =>
    color &&
    css`
      background-color: ${color ? color : "#fecd4d"};
    `}
`;

const CategoryTitle = styled.div`
  ${tw`
    md:w-5/12 py-12
  `};
`;

const KvImage = styled.div`
  ${tw`
    w-7/12 relative z-10
  `}

  img {
    ${tw`
      absolute z-10
    `}
  }
`;

const KvImageApla = styled.div`
  ${tw`
  absolute w-full h-full left-0 top-0 -z-10 overflow-hidden
`}
  &:before {
    content: "";
    ${tw`
      bg-white w-80 h-80 rounded-full absolute -top-2 right-0 block pointer-events-none z-10
    `}
  }
`;

const ProductList = styled.section`
  ${tw`
    container grid grid-cols-4
  `}
`;

export function ProductCategory(props: Category) {
  const isDesktop = useMediaQuery({ minWidth: SCREENS.md });

  return (
    <Main>
      <section>
        <CategoryKv color={props.color}>
          <div className="w-8/12 flex justify-center">
            <CategoryTitle>
              <h1 className="mb-3">{props.title}</h1>
              <Breadcrumbs link={[{ url: "/materace", title: "materace" }]} />
            </CategoryTitle>
            {isDesktop && (
              <KvImage>
                <img src={Image} alt={props.title} />
                <KvImageApla />
              </KvImage>
            )}
          </div>
        </CategoryKv>
        <div className="py-7 flex container">
          <div className="w-5/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </section>

      <ProductList>
        <Sidebar
          width={"1/3"}
          items={[
            { tekst: "Łóżka", link: "/lozka" },
            {
              tekst: "Materace",
              link: "/materace",
              submenu: [
                { tekst: "Materace Bonellowe", link: "/materace-bonellowe" },
              ],
            },
          ]}
        />
      </ProductList>
    </Main>
  );
}
