import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

/**
 * Images
 */
import Img1 from "../../assets/images/girl.jpg";
import Img2 from "../../assets/images/bed.jpg";

interface SectionGalleryProps {
  text: string;
  url: string;
  linkText: string;
}

const SectionGalleryContainer = styled.section`
  ${tw`
    pt-16 relative z-10
  `}
`;

const Row1 = styled.div`
  ${tw`
    text-sm font-light mb-10 md:w-1/2
  `}
`;

const Row2 = styled.div`
  ${tw`
    relative pt-11 md:w-1/2 z-10
  `}
  img {
    ${tw`
       shadow-lg max-w-none absolute right-0
    `}
  }
`;

const Cont = styled.div`
  ${tw`
    md:w-8/12 pt-10
  `}
  p {
    ${tw`
      mb-4 leading-loose
    `}
  }
`;

export function SectionGallery(props: SectionGalleryProps) {
  return (
    <SectionGalleryContainer>
      <div className="container">
        <div className="flex flex-wrap">
          <Row1>
            <img src={Img1} alt="MaxMeble" />
            <div className="flex justify-center">
              <Cont>
                <p>{props.text}</p>
                <Link className="cta cta-yellow" to={props.url}>
                  {props.linkText}
                </Link>
              </Cont>
            </div>
          </Row1>
          <Row2>
            <img src={Img2} alt="MaxMeble" />
          </Row2>
        </div>
      </div>
    </SectionGalleryContainer>
  );
}
