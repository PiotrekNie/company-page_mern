import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ColorsProps {
  colors: {
    foreground: string;
    background: string;
  };
}

const SmallBannerContainer = styled.div<{ colors: ColorsProps }>`
  ${tw`

  `}
`;

export function SmallBanner() {}
