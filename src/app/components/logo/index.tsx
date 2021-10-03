import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoImg from "../../assets/images/max-meble.svg";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    relative
  `};
`;

const LogoText = styled.span`
  ${tw`
    absolute
    text-opacity-0
    -z-10
    pointer-events-none
    opacity-0
  `}
`;

const Image = styled.div`
  width: auto;

  ${tw`
    h-6
    md:h-9
   `}

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={LogoImg} alt="MaxMeble" />
        <LogoText>MaxMeble</LogoText>
      </Image>
    </LogoContainer>
  );
}
