import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { IconContainer } from "./iconContainer";

/**
 * Images
 */
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";

const Title = styled.h2`
  ${tw`
     mb-7
  `}
`;

const Paragraph = styled.p`
  ${tw`
    text-gray-700 font-light md:w-7/12 mb-14 leading-relaxed
  `}
`;

const IconRow = styled.div`
  ${tw`
    grid grid-cols-2 justify-center
  `}
`;

const SectionContainer = styled.section`
  ${tw`
    container pt-60 z-10 relative
  `}
`;

export function SectionIcons() {
  return (
    <SectionContainer className="container">
      <div className="flex">
        <div className="w-1/2">
          <IconRow>
            <IconContainer
              image={Icon1}
              title={"Doskonała jakość wykonania"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }
            />
            <IconContainer
              image={Icon2}
              title={"Doskonała jakość wykonania"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }
            />
            <IconContainer
              image={Icon3}
              title={"Doskonała jakość wykonania"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }
            />
            <IconContainer
              image={Icon4}
              title={"Doskonała jakość wykonania"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }
            />
          </IconRow>
        </div>
        <div className="w-1/2 pt-24">
          <Title>Wszystko czego potrzebujesz do sypialni</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Paragraph>
          <Link className="cta cta-yellow" to="/">
            CZYTAJ WIĘCEJ
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
