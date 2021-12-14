import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { LargeBanner } from "./large-banner";
import { SmallBanner } from "./small-banner";

const BannersContainer = styled.section`
  ${tw`
    container grid grid-cols-3 gap-x-4
  `}
`;

export function Banner() {
  return (
    <BannersContainer>
      <SmallBanner category={"Materace"} title={"Ewa"} url={"/materace/ewa"} />
      <LargeBanner
        category={"Łóżka"}
        title={"Chesterfield"}
        url={"/lozka/chesterfield"}
      />
    </BannersContainer>
  );
}
