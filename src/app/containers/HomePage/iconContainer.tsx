import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

interface IconsProps {
  image: string;
  title: string;
  content: string;
}

const Container = styled.div`
  ${css`
    &:nth-of-type(odd) {
      transform: translateY(-5rem);
    }
  `}
  ${tw`
    md:w-10/12 mb-24
  `}
  > * {
    float: left;
  }
  img {
    ${tw`
      mb-3
    `}
  }
  h4 {
    ${tw`
      mb-4
    `}
  }
`;

export function IconContainer(props: IconsProps) {
  return (
    <Container>
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </Container>
  );
}
