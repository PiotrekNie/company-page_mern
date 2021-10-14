import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SubtitleCont = styled.div`
  ${tw`text-center md:py-14`}
`;

const H2Span1 = styled.span`
  ${tw` text-xs tracking-widest block font-bold text-yellow leading-4 uppercase`};
`;

const H2Span2 = styled.span`
  ${tw`md:text-5xl text-2xl font-serif font-bold`};
`;

export function Subtitle(props: { subtitle1: string; subtitle2: string }) {
  return (
    <SubtitleCont>
      <h2>
        <H2Span1>{props.subtitle1}</H2Span1>
        <H2Span2>{props.subtitle2}</H2Span2>
      </h2>
    </SubtitleCont>
  );
}
