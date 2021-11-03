import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Title = styled.h2`
  ${tw`
     mb-5
  `}
`;

const Paragraph = styled.p``;

const SectionContainer = styled.div`
  ${tw`
    container pt-36
  `}
`;

export function SectionIcons() {
  return (
    <SectionContainer className="container">
      <div className="flex items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <Title>Wszystko czego potrzebujesz do sypialni</Title>
          <p className="md:w-7/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <Link className="cta cta-yellow" to="/">
            CZYTAJ WIĘCEJ
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
