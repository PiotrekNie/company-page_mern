import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BannersContainer = styled.section`
  ${tw`
    container grid grid-cols-4
  `}
`;

export function Banner() {
  return <BannersContainer></BannersContainer>;
}
