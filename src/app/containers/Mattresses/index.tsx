import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import tw from "twin.macro";

interface Category {
  color: string;
  title: string;
}

const CategoryKv = styled.div<{ color: string }>`
  ${tw`
    py-12
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
    md:w-2/3
  `};
`;

const Breadcrumbs = styled.ul`
  ${tw`
    flex flex-wrap p-0
  `};

  li {
    ${tw`
      block
    `}
  }
`;

export function Mattresses(props: Category) {
  return (
    <CategoryKv color={props.color}>
      <CategoryTitle>
        <h1>{props.title}</h1>
        <Breadcrumbs>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>{props.title}</li>
        </Breadcrumbs>
      </CategoryTitle>
    </CategoryKv>
  );
}
