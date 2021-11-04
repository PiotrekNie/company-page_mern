import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Image
 */
import LogoImg from "../../assets/images/max-meble.svg";

const FooterContainer = styled.div`
  ${tw`
  w-full
  `}
`;

const FooterGrid = styled.div`
  ${tw`
    container grid grid-cols-12
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <div className="col-span-6">
          <img src={LogoImg} alt="MaxMeble" />
        </div>
      </FooterGrid>
    </FooterContainer>
  );
}
