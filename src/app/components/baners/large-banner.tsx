import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import Image from "../../assets/images/banner-large.jpg";

interface BannerProps {
  category: string;
  title: string;
  url: string;
}

const LargeBannerContainer = styled.div`
  ${tw`
    relative md:col-span-2 h-90 z-10 p-12
  `}
`;

const BgImage = styled.img`
  transform: translate(-50%, -50%);

  ${tw`
    w-full h-full object-cover absolute left-1/2 top-1/2 -z-10
  `}
`;

export function LargeBanner(props: BannerProps) {
  return (
    <LargeBannerContainer>
      <span className="block text-white font-semibold mb-3">
        {props.category}
      </span>
      <span className="block font-serif text-3xl mb-10">{props.title}</span>
      <Link to={props.url} title={props.title} className="cta cta-white">
        Sprawdź
      </Link>
      <BgImage src={Image} alt="alt" />
    </LargeBannerContainer>
  );
}
