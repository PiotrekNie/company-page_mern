import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const NavbarContainer = styled.div`
  min-height: 140px;
  ${tw`
    container
    grid
    md:grid-cols-4
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export function NavBar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
