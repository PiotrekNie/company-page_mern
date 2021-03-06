import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Blockquote } from "../../components/blockquote";

import { SectionCarousel } from "../../components/carousel";
import { SectionCategories } from "./sectionCategories";
import { SectionContact } from "./sectionContact";
import { SectionGallery } from "./sectionGallery";
import { SectionIcons } from "./sectionIcons";
import { Sidebar } from "../../components/sidebar";

/**
 * Images
 */
import Background from "../../assets/images/background.jpg";

const HomeBg = styled.img`
  transform: translate(-50%, -50%);
  ${tw`
    left-1/2 top-1/2 absolute pointer-events-none -z-10 max-w-none w-full h-full object-contain
  `}
`;

export function HomePage() {
  return (
    <main className="flex">
      <div>
        <SectionCarousel />
        <SectionCategories />
        <Blockquote
          quote={
            "Sen jest jedną z najwspanialszuch rzeczy, którą możesz podarować sobie całkowicie za darmo."
          }
          cite={"ŚPIJ DOBRZE NA MATERACACH MEBLEMAX"}
        />
        <SectionGallery
          text={
            "By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
          }
          url={"/o-nas"}
          linkText={"Dowiedz się więcej"}
        />
        <SectionIcons />
        <SectionContact />
      </div>
      <HomeBg src={Background} alt="MaxMeble" />
      <Sidebar />
    </main>
  );
}
