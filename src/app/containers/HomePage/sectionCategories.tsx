import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { COLORS } from "../../components/colors";
import { ProductCategory } from "../../components/productCategory";
import { Subtitle } from "../../components/subtitle";

/**
 * Images
 */
import Bads from "../../assets/images/lozka.png";
import Mattress from "../../assets/images/materiace.png";
import Pillows from "../../assets/images/poduszki.png";
import BedFranes from "../../assets/images/stelaze.png";
import Accessories from "../../assets/images/akcesoria.png";
import Upholstered from "../../assets/images/meble.png";

const ProductCategoriesContainer = styled.section`
  ${tw` container `};
`;

const ProductCategoriesGrid = styled.div`
  ${tw` grid grid-cols-2 gap-4 `};
`;

export function SectionCategories() {
  return (
    <ProductCategoriesContainer>
      <Subtitle subtitle1={"NASZE"} subtitle2={"Produkty"} />
      <ProductCategoriesGrid>
        <ProductCategory
          color={COLORS.green}
          img={{
            url: Bads,
            alt: "Łóżka",
          }}
          title={"Łóżka"}
          url={"/"}
        />
        <ProductCategory
          color={COLORS.orange}
          img={{
            url: Mattress,
            alt: "Materace",
          }}
          title={"Materace"}
          url={"/materace"}
        />
        <ProductCategory
          color={COLORS.aqua}
          img={{
            url: Pillows,
            alt: "Poduszki",
          }}
          title={"Poduszki"}
          url={"/"}
        />
        <ProductCategory
          color={COLORS.meant}
          img={{
            url: BedFranes,
            alt: "Stelaże",
          }}
          title={"Stelaże"}
          url={"/"}
          position={{
            bottom: -30,
          }}
        />
        <ProductCategory
          color={COLORS.rose}
          img={{
            url: Accessories,
            alt: "Akcesoria",
          }}
          title={"Akcesoria"}
          url={"/"}
          position={{
            left: 80,
            bottom: -30,
          }}
        />
        <ProductCategory
          color={COLORS.peach}
          img={{
            url: Upholstered,
            alt: "Meble tapicerowane",
          }}
          title={"Meble tapicerowane"}
          url={"/"}
          position={{
            bottom: -30,
          }}
        />
      </ProductCategoriesGrid>
    </ProductCategoriesContainer>
  );
}
