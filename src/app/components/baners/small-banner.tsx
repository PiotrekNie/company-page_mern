import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import Image from "../../assets/images/banner-small.jpg";

interface BannerProps {
  category: string;
  title: string;
  url: string;
}

const SmallBannerContainer = styled.div`
  ${tw`
    relative h-90 z-10 p-12
  `}
`;

const BgImage = styled.img`
  transform: translate(-50%, -50%);

  ${tw`
    w-full h-full object-cover absolute left-1/2 top-1/2 -z-10
  `}
`;

export function SmallBanner(props: BannerProps) {
  return (
    <SmallBannerContainer>
      <div className="grid grid-cols-2 gap-x-2 md:items-end">
        <div>
          <span className="block font-semibold mb-3">{props.category}</span>
          <span className="block font-serif text-3xl">{props.title}</span>
        </div>
        <div>
          <Link to={props.url} title={props.title} className="cta cta-white">
            Sprawdź
          </Link>
        </div>
      </div>
      <BgImage src={Image} alt="alt" />
    </SmallBannerContainer>
  );
}
