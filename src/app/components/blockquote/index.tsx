import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface QuoteProps {
  quote: string;
  cite: string;
}

const QuoteContainer = styled.section`
  ${tw`
    text-center md:py-36 relative container
  `};
  &:before {
    content: "";
    width: 2px;
    ${tw`
    bg-yellow absolute left-1/2 bottom-0 transform translate-x-1/2 h-24
    `}
  }
`;

const Quote = styled.h2`
  ${tw`
    md:text-3xl mb-5 font-serif
  `}
`;

const Cite = styled.p`
  ${tw`
    tracking-widest text-xs
  `}
`;

export function Blockquote(props: QuoteProps) {
  return (
    <QuoteContainer>
      <div className="flex justify-center">
        <div className="md:w-8/12">
          <Quote>{props.quote}</Quote>
          <Cite>{props.cite}</Cite>
        </div>
      </div>
    </QuoteContainer>
  );
}
