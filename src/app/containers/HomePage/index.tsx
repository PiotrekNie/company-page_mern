import React from "react";
import { Blockquote } from "../../components/blockquote";

import { ProductCategories } from "./productCategories";
import { SectionContact } from "./sectionContact";
import { SectionGallery } from "./sectionGallery";
import { SectionIcons } from "./sectionIcons";

export function HomePage() {
  return (
    <div>
      <ProductCategories />
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
        linkText={"dowiedz się więcej"}
      />
      <SectionIcons />
      <SectionContact />
    </div>
  );
}
